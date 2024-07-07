'use client';

import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import RedirectToPath from '@/components/auth/redirect';

const queryClient = new QueryClient();
const toasterStyle = {
  background: '#1E2328',
  fontFamily: 'poppins',
  alignItems: 'center',
  color: '#DCEBFA',
};

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
      <Toaster
        gutter={8}
        toastOptions={{
          className: 'font-poppins',
          duration: 3000,
          style: {
            background: '#1E2328',
            color: '#f6f6f6',
            border: '1px solid #2D3339',
            borderRadius: '25px',
            padding: '0.5rem 1rem',
          },
        }}
        position="top-center"
      />
    </QueryClientProvider>
  );
}
