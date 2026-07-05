'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BirdNettingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/bird-net');
  }, [router]);

  return null;
}
