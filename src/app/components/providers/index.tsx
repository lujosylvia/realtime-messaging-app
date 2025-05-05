'use client';

import cognitoAuthConfig from '@/config/aws-cognito';
import config from '@/config/aws-eventapi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Amplify } from 'aws-amplify';
import react, { useEffect, useState } from 'react';
import { AuthProvider } from 'react-oidc-context';

const queryClient = new QueryClient();
// @ts-ignore
Amplify.configure(config);

export default function Providers({ children }: { children: react.ReactNode }) {
  const [cognitoConfig, setCognitoConfig] = useState(cognitoAuthConfig);
  
  useEffect(() => {
    const origin = window?.location?.origin || 'http://localhost:3000';
    const config = {
      ...cognitoAuthConfig,
      redirect_uri: `${origin}/conversation`,
    };
    setCognitoConfig(config);
  }, []);

  return (
    <AuthProvider {...cognitoConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AuthProvider>
  );
}