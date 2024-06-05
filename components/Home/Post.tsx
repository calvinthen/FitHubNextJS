// ../components/Home/Post.tsx
import React from 'react';

interface Post {
  title: string;
  desc: string;
  image: string;
}

interface PostProps {
  post: Post;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (    
    <div>
      {/* <h2>{post.title}</h2>
      <p>{post.desc}</p> */}
    </div>
  );
}

export default Post;
