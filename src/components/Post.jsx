import React, { useEffect, useState } from 'react';

const Post = () => {
  const [post, setPost] = useState(null);
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}?_delay=3000`
      );
      const data = await res.json();
      setLoading(false);
      setPost(data);
    };
    if (id !== '') fetchPosts();
  }, [id]);
  return (
    <>
      <div>
        <label htmlFor="id">Post Id</label>
        <input
          id="id"
          name="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        {loading ? (
          <p>loading post...</p>
        ) : (
          <ul>{post && JSON.stringify(post)}</ul>
        )}
      </div>
    </>
  );
};

export default Post;
