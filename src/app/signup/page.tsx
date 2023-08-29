'use client';
//"use client" tells Nextjs that this file is client side
// Which means we have access to front-end stuff like useState(), useEffect(), etc
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { axios } from 'axios';

export default function SignupPage() {
  // What we want to keep track from the person entering their details on our form
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  // Storing those details in our database
  // Usually when dealing with database, the function is an async function
  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="">Sign Up</h1>
      <hr />
      <label htmlFor="username">username</label>
      {/* '...user' means we're only updating username and  want everything else to remain the same for the user state */}
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onSignup}
      >
        Sign up here!
      </button>
      <Link href="/login">Login Page</Link>
    </div>
  );
}
