import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Eye, EyeOff, Trash2, LogOut } from 'lucide-react';
import { isAdminAuthenticated, clearAdminSession, getAdminSession } from '../services/adminService';
import { listenToReviews, approveReview, hideReview, unhideReview, deleteReview } from '../services/reviewService';
import { ReviewRecord } from '../types/review';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<ReviewRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin/login');
      return;
    }

    const unsubscribe = listenToReviews(
      (updatedReviews) => {
        setReviews(updatedReviews);
        setIsLoading(false);
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.error('Error loading reviews:', error);
        setIsLoading(false);
      },
      true // admin mode - show all reviews
    );

    return () => unsubscribe();
  }, [navigate]);

  const handleApprove = async (reviewId: string) => {
    setActionLoading(reviewId);
    try {
      await approveReview(reviewId);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error approving review:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleHide = async (reviewId: string) => {
    setActionLoading(reviewId);
    try {
      await hideReview(reviewId);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error hiding review:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleUnhide = async (reviewId: string) => {
    setActionLoading(reviewId);
    try {
      await unhideReview(reviewId);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error unhiding review:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (reviewId: string) => {
    if (!confirm('Are you sure you want to delete this review?')) {
      return;
    }
    setActionLoading(reviewId);
    try {
      await deleteReview(reviewId);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error deleting review:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleLogout = () => {
    clearAdminSession();
    navigate('/admin/login');
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const pendingCount = reviews.filter((r) => !r.approved).length;
  const hiddenCount = reviews.filter((r) => r.hidden).length;
  const approvedCount = reviews.filter((r) => r.approved && !r.hidden).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-burnt-orange-600">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">Total Reviews</div>
            <div className="text-3xl font-bold text-gray-900">{reviews.length}</div>
          </div>
          <div className="bg-yellow-50 rounded-lg shadow p-6 border border-yellow-200">
            <div className="text-sm text-yellow-700 mb-1">Pending Approval</div>
            <div className="text-3xl font-bold text-yellow-700">{pendingCount}</div>
          </div>
          <div className="bg-green-50 rounded-lg shadow p-6 border border-green-200">
            <div className="text-sm text-green-700 mb-1">Approved & Visible</div>
            <div className="text-3xl font-bold text-green-700">{approvedCount}</div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading reviews...</div>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-gray-500">No reviews found</div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Review
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reviews.map((review) => (
                    <tr key={review.id} className={review.hidden ? 'bg-gray-100 opacity-75' : ''}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">{review.name}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{review.feedback}</p>
                        {review.mediaUrl && (
                          <span className="inline-block mt-1 text-xs text-blue-600">
                            {review.mediaType === 'image' ? '📷' : '🎥'} Media attached
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          {review.approved ? (
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                              <Check className="w-3 h-3 mr-1" />
                              Approved
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                              <X className="w-3 h-3 mr-1" />
                              Pending
                            </span>
                          )}
                          {review.hidden && (
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              <EyeOff className="w-3 h-3 mr-1" />
                              Hidden
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{formatDate(review.createdAt)}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {!review.approved && (
                            <button
                              onClick={() => handleApprove(review.id)}
                              disabled={actionLoading === review.id}
                              className="p-2 text-green-600 hover:bg-green-50 rounded transition disabled:opacity-50"
                              title="Approve"
                            >
                              <Check className="w-5 h-5" />
                            </button>
                          )}
                          {!review.hidden ? (
                            <button
                              onClick={() => handleHide(review.id)}
                              disabled={actionLoading === review.id}
                              className="p-2 text-gray-600 hover:bg-gray-50 rounded transition disabled:opacity-50"
                              title="Hide"
                            >
                              <EyeOff className="w-5 h-5" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleUnhide(review.id)}
                              disabled={actionLoading === review.id}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded transition disabled:opacity-50"
                              title="Unhide"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(review.id)}
                            disabled={actionLoading === review.id}
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition disabled:opacity-50"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;

