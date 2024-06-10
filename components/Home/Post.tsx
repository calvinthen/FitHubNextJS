// ../components/Home/Post.tsx
import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { GeoPoint } from 'firebase/firestore';
import PostModalComponent from '../Home/PostModal';


interface Post {
  title: string;
  desc: string;
  image: string;
  date: string;
  loc: string;
}

interface PostProps {
  post: Post;
}


const Post: React.FC<PostProps> = ({ post }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (   

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-5">
      <div>
        <img className="rounded-t-lg w-full sm:h-[170px] md:h-[170px] lg:h-[200px] cursor-pointer" src={post.image} alt="Image Firebase" onClick={handleImageClick} />
        <div className="p-5">
          <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{post.title}</h3>

          <div className='flex items-center text-orange-500 gap-2 mb-2'>
            <CiCalendarDate className='text-[20px]' />
            {post.date}
          </div>

          <div className='flex items-center text-blue-500 gap-2 mb-2'>
            <IoLocationOutline className='text-[20px]' />
            {post.loc}
          </div>
          
          <p className="mb-3 font-normal text-gray-700">{post.desc}</p>

          <div className='flex items-center justify-between'>
            <a onClick={handleImageClick} className='text-blue-500 font-bold cursor-pointer'>
              Read More
            </a>

            <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ask To Join
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
        </div>
      </div>
      <PostModalComponent isOpen={isModalOpen} onClose={handleCloseModal} post={post} />
    </div> 
  );
}

export default Post;
