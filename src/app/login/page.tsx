// Copied and modified from signup page

'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { axios } from 'axios';

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="">Login</h1>
      <hr />
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
        onClick={onLogin}
      >
        Log in here!
      </button>
      <Link href="/signup">Sign Up Page</Link>
    </div>
  );
}
