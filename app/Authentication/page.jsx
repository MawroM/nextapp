import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Authentication() {
  const { data: session, status } = useSession();
  console.log(useSession().data)
  const{push}= useRouter()

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in</div>;
  }
  useEffect(() => {
    console.log('hola')
    push('/Home')
console.log('entre a home')
  }, []);

  return (
  <></>
  );
}
