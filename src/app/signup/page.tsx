'use client';
//"use client" tells Nextjs that this file is client side
// Which means we have access to front-end stuff like useState(), useEffect(), etc
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import {axios} from 'axios'

export default function SignupPage() {
  return (
    <div className="flex">
      <h1 className="text-center text-white text-2xl">Sign Up</h1>
    </div>
  );
}
