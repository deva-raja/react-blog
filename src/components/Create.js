import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('shawn');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    let blogs = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blogs),
    }).then(() => {
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div>
      <div className='create'>
        <h2> Add a New blog</h2>
        <form onSubmit={submitHandler}>
          <label>Blog title:</label>
          <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Blog body:</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <label>Blog author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value='mario'>mario</option>
            <option value='yoshi'>yoshi</option>
            <option value='george st piere'>george st piere</option>
            <option value='kent c dots'>kent c dots</option>
            <option value='shawn'>shawn</option>
            <option value='dev ed'>dev ed</option>
          </select>
          {!isPending && <button>Add blog</button>}
          {isPending && <button disabled>Adding blog...</button>}
        </form>
      </div>
    </div>
  );
}

export default Create;
