

'use client';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactNode } from 'react'

const queryClient = new QueryClient();

const TanStackProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default TanStackProvider 