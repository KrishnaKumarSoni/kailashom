import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, UploadCloud, X } from 'lucide-react';
import { submitReview } from '../services/reviewService';
import { ReviewInput } from '../types/review';

const ratingScale = [1, 2, 3, 4, 5];

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ReviewInput>({
    name: '',
    rating: 0,
    feedback: '',
    mediaFile: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleStarClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setFormData((prev) => ({ ...prev, mediaFile: null }));
      return;
    }

    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      setStatus({ type: 'error', message: 'Please upload an image or video file.' });
      return;
    }

    setStatus(null);
    setFormData((prev) => ({ ...prev, mediaFile: file }));
  };

  const handleClearFile = () => {
    setFormData((prev) => ({ ...prev, mediaFile: null }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus(null);

    try {
      await submitReview(formData);
      setFormData({
        name: '',
        rating: 0,
        feedback: '',
        mediaFile: null,
      });
      const mediaInput = form.elements.namedItem('media') as HTMLInputElement | null;
      if (mediaInput) {
        mediaInput.value = '';
      }
      navigate('/', { replace: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setStatus({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-jakarta font-bold tracking-wider text-burnt-orange-600">
            KAILASHOM
          </Link>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
              boxShadow: '0 8px 18px rgba(234, 88, 12, 0.35)'
            }}
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white shadow-xl mt-12 overflow-hidden">
          <div className="bg-burnt-orange-600 text-white px-8 py-10">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold text-orange-200 mb-2">Share your journey</p>
            <h1 className="text-3xl sm:text-4xl font-bold font-jakarta mb-4">
              Tell us how the numerology session helped you
            </h1>
            <p className="text-lg text-orange-100 leading-relaxed font-inter">
              Your reflections help other families and founders understand how a consultation feels in real life. Feel free to keep it simple—authentic experiences are the most helpful.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-10 space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 uppercase tracking-[0.2em] mb-3">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Priya Sharma"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-inter focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <p className="block text-sm font-semibold text-gray-700 uppercase tracking-[0.2em] mb-3">
                Star rating
              </p>
              <div className="flex items-center gap-3">
                {ratingScale.map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    className="p-2 rounded-full transition-transform hover:scale-110 focus:outline-none"
                    aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        formData.rating >= star ? 'fill-burnt-orange-500 text-burnt-orange-500' : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700 uppercase tracking-[0.2em] mb-3">
                Your experience
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows={6}
                placeholder="Share a short note about what supported you, what changed, or why you’d recommend us."
                value={formData.feedback}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-inter focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent resize-none"
                required
              />
            </div>

            <div>
              <p className="block text-sm font-semibold text-gray-700 uppercase tracking-[0.2em] mb-3">
                Add a photo or video (optional)
              </p>
              <label
                htmlFor="media"
                className="flex items-center justify-between gap-4 border-2 border-dashed border-gray-300 rounded-xl px-6 py-5 cursor-pointer hover:border-burnt-orange-400 transition"
              >
                <div>
                  <p className="text-base font-semibold text-gray-900 font-inter">Drag & drop or click to upload</p>
                  <p className="text-sm text-gray-500 font-inter">JPEG, PNG, MP4 up to 25MB</p>
                </div>
                <UploadCloud className="w-8 h-8 text-burnt-orange-500" />
              </label>
              <input id="media" name="media" type="file" accept="image/*,video/*" className="hidden" onChange={handleFileChange} />

              {formData.mediaFile && (
                <div className="mt-4 flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800 font-inter">{formData.mediaFile.name}</p>
                    <p className="text-xs text-gray-500">{Math.round(formData.mediaFile.size / 1024)} KB</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClearFile}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Remove file"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {status && (
              <div
                className={`rounded-xl px-5 py-4 font-inter text-sm ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-600 border border-red-200'
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-gray-500 font-inter">
                By sharing your review you allow us to quote your words on our website. We only publish first names.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl text-white font-semibold transition transform hover:-translate-y-0.5 disabled:opacity-70"
                style={{
                  background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
                  boxShadow: '0 10px 22px rgba(234, 88, 12, 0.35)'
                }}
              >
                {isSubmitting ? 'Submitting…' : 'Submit review'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default WriteReview;
