import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import serviceAccount from '../kailashom-e0493-firebase-adminsdk-fbsvc-4b8b2ba685.json' assert { type: 'json' };

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const seedReviews = [
  {
    name: 'Priya S.',
    rating: 5,
    feedback: 'The session gave me language for changes I wanted to make. The notes made it easy to share with my family.',
    mediaUrl: null,
    mediaType: null
  },
  {
    name: 'Rahul K.',
    rating: 4,
    feedback: 'Helpful for timing a business name refresh. Appreciated the calm breakdown of each option.',
    mediaUrl: null,
    mediaType: null
  },
  {
    name: 'Meera P.',
    rating: 5,
    feedback: 'Loved how the discussion included our traditions. We narrowed baby names without feeling rushed.',
    mediaUrl: null,
    mediaType: null
  },
  {
    name: 'Ananya G.',
    rating: 5,
    feedback: 'Used the personal year guide as a monthly check-in. The follow-up messages kept me on track.',
    mediaUrl: null,
    mediaType: null
  },
  {
    name: 'Suresh R.',
    rating: 4,
    feedback: 'We rebranded our cafe after the consult. The new name felt right and the launch plan was realistic.',
    mediaUrl: null,
    mediaType: null
  }
];

async function main() {
  const batch = db.batch();
  const reviewsCollection = db.collection('reviews');

  for (const review of seedReviews) {
    const docRef = reviewsCollection.doc();
    batch.set(docRef, {
      ...review,
      createdAt: FieldValue.serverTimestamp()
    });
  }

  await batch.commit();
  console.log('Seeded reviews successfully.');
}

main().catch((error) => {
  console.error('Failed to seed reviews:', error);
  process.exit(1);
});
