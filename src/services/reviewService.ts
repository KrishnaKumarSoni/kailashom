import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../firebase';
import { ReviewInput, ReviewMediaType, ReviewRecord } from '../types/review';

const reviewsCollection = collection(db, 'reviews');

function detectMediaType(file?: File | null): ReviewMediaType {
  if (!file) {
    return null;
  }

  if (file.type.startsWith('image/')) {
    return 'image';
  }

  if (file.type.startsWith('video/')) {
    return 'video';
  }

  return null;
}

export async function submitReview(input: ReviewInput): Promise<void> {
  const { name, rating, feedback, mediaFile } = input;

  if (!name.trim()) {
    throw new Error('Please add your name.');
  }

  if (!feedback.trim()) {
    throw new Error('Please share a short note about your experience.');
  }

  if (rating < 1 || rating > 5) {
    throw new Error('Please select a rating between 1 and 5 stars.');
  }

  let mediaUrl: string | undefined;
  const mediaType = detectMediaType(mediaFile);

  if (mediaFile && mediaType) {
    try {
      const storageRef = ref(storage, `reviews/${Date.now()}-${mediaFile.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`);
      await uploadBytes(storageRef, mediaFile, {
        contentType: mediaFile.type,
        cacheControl: 'public,max-age=31536000,immutable',
      });
      mediaUrl = await getDownloadURL(storageRef);
    } catch (uploadError) {
      // eslint-disable-next-line no-console
      console.error('Failed to upload media file:', uploadError);
      // Continue without media - don't block review submission
      // The error will be visible in console for debugging
    }
  }

  await addDoc(reviewsCollection, {
    name: name.trim(),
    feedback: feedback.trim(),
    rating,
    mediaUrl: mediaUrl ?? null,
    mediaType,
    createdAt: serverTimestamp(),
  });
}

export function listenToReviews(
  onUpdate: (reviews: ReviewRecord[]) => void,
  onError?: (error: Error) => void
): () => void {
  const reviewsQuery = query(reviewsCollection, orderBy('createdAt', 'desc'));

  return onSnapshot(
    reviewsQuery,
    (snapshot) => {
      const records: ReviewRecord[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        const createdAtRaw = data.createdAt;
        return {
          id: doc.id,
          name: data.name ?? 'Anonymous',
          feedback: data.feedback ?? '',
          rating: Number(data.rating) || 0,
          mediaUrl: data.mediaUrl ?? undefined,
          mediaType: (data.mediaType as ReviewMediaType) ?? null,
          createdAt: createdAtRaw?.toDate ? createdAtRaw.toDate() : new Date(),
        };
      });

      onUpdate(records);
    },
    (error) => {
      if (onError) {
        onError(error);
      } else {
        // eslint-disable-next-line no-console
        console.error('Error fetching reviews', error);
      }
    }
  );
}
