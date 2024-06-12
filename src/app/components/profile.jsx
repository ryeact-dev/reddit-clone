'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>Fromm client: user is signed in</div>;
  }

  return <div>Fromm client: user is NOT signed in</div>;
}
