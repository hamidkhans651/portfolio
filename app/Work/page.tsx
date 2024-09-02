'use client';

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Page = () => {
  return (
    <div className='page-content'>
      <h1>Our Work</h1>
      <h2>
        <Link href="/"> {/* Set the href prop to the root URL */}
          <a>Home</a> {/* Wrap the clickable text in an <a> tag */}
        </Link>
      </h2>
      <h2>
        <Link href="/About"> {/* Set the href prop to the root URL */}
          <a>About</a> {/* Wrap the clickable text in an <a> tag */}
        </Link>
      </h2>
      <h2>
        <Link href="/Contact"> {/* Set the href prop to the root URL */}
          <a>Contact</a> {/* Wrap the clickable text in an <a> tag */}
        </Link>
      </h2>
    </div>
  );
};

export default Page;
