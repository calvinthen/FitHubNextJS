import Search from '../components/Home/Search'
import GameList from '../components/Home/GameList'
import Hero from '../components/Home/Hero'
import PostComponent from '../components/Home/Post'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import app from '../shared/FirebaseConfig'
import { useEffect, useState } from 'react'
import Posts from '../components/Home/Post'

interface Post {
  title: string;
  desc: string;
}


export default function Home() {
  const db = getFirestore(app)
  const [posts,setPosts]=useState<Post[]>([]);

  useEffect(()=>{
    getPost();
  },[])

  
  const getPost=async()=>
  {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsArray: Post[] = [];
    
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      
      console.log(doc.id, " => ", doc.data());
     
      postsArray.push(doc.data() as Post);

    });
    setPosts(postsArray);
  }
  return (
    <div className='px-5 sm:px-7 md:px-10 mt-9'>
      <Hero/>
      <Search/>
      <GameList/>

      {posts ? posts.map((post, index) => (
        <PostComponent key={index} post={post} />
      )) : null}

    </div>
  )
}