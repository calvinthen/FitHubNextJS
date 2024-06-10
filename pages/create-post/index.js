import React, { useEffect } from 'react'
import Form from '../../components/CreatePost/Form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


function Index() {
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router]);

  if (!session) {
    return null; // Or a loading spinner, or some placeholder
  }

  return (
    <div className='flex justify-center'>
    <div className='p-6 mt-8 lg:w-[35%] md:w-[50%]'>
        <h2 className='text-[30px] 
        font-extrabold text-blue-500'>CREATE POST</h2>
        <p>Create Post and Discover/Invite new Friends and Player </p>
        <Form/>
    </div>
    </div>
  );
}

export default Index;
