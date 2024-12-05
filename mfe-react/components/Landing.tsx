import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main>
      <h3>Landing component</h3>
      <Link to="/about">
        <button>Nav to secondary page</button>
      </Link>
    </main>
  );
}
