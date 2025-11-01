import { useState } from 'react';
import { submitReview } from '../services/reviewService';

export default function TestPost() {
  const [status, setStatus] = useState<string | null>(null);

  async function handlePost() {
    setStatus('posting');
    try {
      await submitReview({
        name: 'Test User',
        rating: 5,
        feedback: 'This is a test review posted from the test endpoint.',
        mediaFile: null,
      });
      setStatus('success');
    } catch (err: any) {
      setStatus('error: ' + (err.message || String(err)));
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-2xl font-semibold mb-4">Test: Post a Review</h1>
        <p className="mb-4">Click the button below to post a sample public review (no login required).</p>
        <button
          onClick={handlePost}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
          disabled={status === 'posting'}
        >
          {status === 'posting' ? 'Posting...' : 'Post Sample Review'}
        </button>

        {status && (
          <div className="mt-4">
            <strong>Status:</strong> {status}
          </div>
        )}
      </div>
    </div>
  );
}
