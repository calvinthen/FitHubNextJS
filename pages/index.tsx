// pages/index.tsx
import React, { useEffect, useState } from 'react';
import Search from '../components/Home/Search';
import GameList from '../components/Home/GameList';
import Hero from '../components/Home/Hero';
import PostComponent from '../components/Home/Post';
import { getFirestore, collection, getDocs, GeoPoint } from 'firebase/firestore';
import app from '../shared/FirebaseConfig';
import PostModalComponent from '../components/Home/PostModal';

interface Post {
  title: string;
  desc: string;
  image: string;  
  date: string;
  loc: string;
}

const Home: React.FC = () => {
  const db = getFirestore(app);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsArray: Post[] = [];

    querySnapshot.forEach((doc) => {
      postsArray.push(doc.data() as Post);
    });
    setPosts(postsArray);
  };

  return (
    <div className='px-5 sm:px-7 md:px-10 mt-9'>
      <Hero />
      <Search />
      <GameList />
      <div className='grid grid-grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4'>
        {posts ? posts.map((post, index) => (
            <PostComponent key={index} post={post} />
        )) : null}
      </div>
      
    </div>
  );
}

export default Home;
