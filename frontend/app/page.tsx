'use client';
import RedirectToPath from '@/components/auth/redirect';
import Logo from '@/components/shared/logo';
import { LoaderCircle } from 'lucide-react';
import './global.css';
export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center h-screen bg-primary-dark">
      <RedirectToPath path="/dashboard" />
      <Logo variant="dark" className="text-5xl md:text-9xl" />
      <LoaderCircle className="animate-spin mt-5 text-primary-foreground" />
    </main>
  );
}
