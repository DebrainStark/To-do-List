// components/WaitlistForm.js
"use client"; // Add this line

import { useState } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'waitlist'), { email });
      setEmail('');
      alert('You have been added to the waitlist!');
    } catch (error) {
      console.error('Error adding to waitlist: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Join Waitlist</button>
    </form>
  );
};

export default WaitlistForm;
