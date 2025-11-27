// automatic JSX runtime - no default React import needed
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MinimalPage from './components/MinimalPage';
import Footer from './components/Footer';
import WriteReview from './pages/WriteReview';
import TestPost from './pages/TestPost';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { isAdminAuthenticated } from './services/adminService';

const LandingPage = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <MinimalPage />
    </main>
    <Footer />
  </div>
);

const ProtectedAdminRoute = ({ children }: { children: React.ReactElement }) => {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/write-a-review" element={<WriteReview />} />
      <Route path="/test-post" element={<TestPost />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        }
      />
    </Routes>
  );
}

export default App;
