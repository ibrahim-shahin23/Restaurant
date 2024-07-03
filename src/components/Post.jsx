import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
      <h1>Post_{id}_</h1>
    </div>
  );
};

export default Post;
