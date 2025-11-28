// Script to add approved: true and hidden: false to existing reviews
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const serviceAccount = JSON.parse(
  readFileSync(join(__dirname, '../kailashom-e0493-firebase-adminsdk-fbsvc-4b8b2ba685.json'), 'utf8')
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function migrateReviews() {
  const reviewsRef = db.collection('reviews');
  const snapshot = await reviewsRef.get();

  console.log(`Found ${snapshot.size} reviews to check`);

  let updated = 0;
  for (const doc of snapshot.docs) {
    const data = doc.data();
    
    // Check if review needs migration
    if (data.approved === undefined || data.hidden === undefined) {
      await doc.ref.update({
        approved: true,  // Approve existing reviews
        hidden: false,
      });
      console.log(`Updated review: ${doc.id} (${data.name})`);
      updated++;
    }
  }

  console.log(`\nMigration complete. Updated ${updated} reviews.`);
}

migrateReviews().catch(console.error);

