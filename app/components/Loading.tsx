'use client'


import React, { useState, useEffect } from 'react';
import Loader from './Loader';


const Loading = () => {
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      // simulate loading process
      setTimeout(() => setLoading(false), 3000); // Remove loading screen after 3 seconds
    }, []);
  return (
    <main className={`${isLoading ? 'overflow-hidden h-screen' : ''}`}>
    {isLoading && (
      <div className="loader fixed inset-0 z-50 flex justify-center items-center">
        <Loader/>
      </div>
    )}
    {/* Optional: if you want to hide the content behind the loader */}
    {!isLoading && (
      <>
    
      </>
    )}
  </main>
);
}

export default Loading
