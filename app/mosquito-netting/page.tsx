'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MosquitoNettingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/mosquito-net');
  }, [router]);

  return null;
}
