import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
        <div>
          <h1>Please click the button bellow to see users</h1>
        </div>
      
      {posts.map(post => (
        <div key={post.id}>
        <li className='list-group-item'>
          <img src={post.avatar}></img>
        </li>
        <li className='list-group-item'>
          First Name: {post.first_name}
        </li>
        <li className='list-group-item'>
          Last Name: {post.last_name}
        </li>
        <li className='list-group-item'>
          E-mail: {post.email}
        </li>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
