import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
  let { id } = useParams();
  let { error, loading, data: blog } = useFetch(' http://localhost:8000/blogs/' + id);
  let history = useHistory();

  const handleDelete = () => {
    fetch(' http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <div className='blog-details'>
        {loading && <div>loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <div>
            <article>
              <h2>{blog.title}</h2>
              <p>Written by - {blog.author}</p>
              <div>{blog.body}</div>
            </article>
            <button onClick={() => handleDelete()}>delete blog</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogDetails;
