import React from 'react';
import Header from './components/Header';
import MinimalPage from './components/MinimalPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MinimalPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;