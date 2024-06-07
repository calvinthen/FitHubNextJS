import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../../shared/FirebaseConfig';

interface Post {
  title: string;
  desc: string;
  image: string;
  date: string;
  loc: string;
}

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, post }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!post) return null;

  return (
    <div className={`modal ${isOpen ? 'flex' : 'hidden'} fixed inset-0 bg-gray-800 bg-opacity-50 items-center justify-center`}>
      <div className="modal-box bg-white p-6 rounded shadow-lg rounded-md">
        <img className="rounded-t-lg w-full  sm:h-[170px] md:h-[170px] lg:h-[200px]" src={post.image} alt="Post" />
        <h3 className="font-bold text-lg">{post.title}</h3>
        <p className="py-4">{post.desc}</p>
        <div className="flex items-center text-orange-500 gap-2 mb-2">
          <span className="text-[20px]">📅</span>
          {post.date}
        </div>
        <div className="flex items-center text-blue-500 gap-2 mb-2">
          <span className="text-[20px]">📍</span>
          {post.loc}
        </div>
        <div className="modal-action flex justify-center mt-4">
          <button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
