'use client';

import cognitoAuthConfig from '@/config/aws-cognito';
import config from '@/config/aws-eventapi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Amplify } from 'aws-amplify';
import react from 'react';
import { AuthProvider } from 'react-oidc-context';

const queryClient = new QueryClient();
// @ts-ignore
Amplify.configure(config);

export default function Providers({ children }: { children: react.ReactNode }) {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AuthProvider>
  );
}