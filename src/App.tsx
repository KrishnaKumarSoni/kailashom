// automatic JSX runtime - no default React import needed
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MinimalPage from './components/MinimalPage';
import Footer from './components/Footer';
import WriteReview from './pages/WriteReview';
import TestPost from './pages/TestPost';

const LandingPage = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <MinimalPage />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/write-a-review" element={<WriteReview />} />
      <Route path="/test-post" element={<TestPost />} />
    </Routes>
  );
}

export default App;
