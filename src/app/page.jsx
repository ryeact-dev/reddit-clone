import * as actions from './actions';
import { Button } from '@nextui-org/react';
import { auth } from '@/auth';
import Profile from './components/profile';

export default async function Home() {
  const sesssion = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type='submit'>Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type='submit'>Sign Out</Button>
      </form>

      {sesssion?.user ? (
        <div>{JSON.stringify(sesssion.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}

      <Profile />
    </div>
  );
}
