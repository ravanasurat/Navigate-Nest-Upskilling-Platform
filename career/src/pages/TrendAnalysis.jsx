import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TrendAnalysis() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDataProcessed = (processedData) => {
    setData(processedData);
  };

  return (
    
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header/>
        <main className="flex-grow container mx-auto p-4">
          
          <Dashboard/>
          <Footer/>
        </main>
      </div>
  );
}

export default TrendAnalysis;