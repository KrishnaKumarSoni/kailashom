import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MinimalPage from './components/MinimalPage';
import Footer from './components/Footer';
import WriteReview from './pages/WriteReview';

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
    </Routes>
  );
}

export default App;
