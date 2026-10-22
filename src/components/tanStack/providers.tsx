'use client';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { useState, type ReactNode } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

function providers({children}:ProvidersProps) {
    const [queryClient] = useState(()=> new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default providers
