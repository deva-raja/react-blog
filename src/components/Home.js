import Bloglist from './Bloglist';
import useFetch from './useFetch';

function Home() {
  let { error, loading, data: blogs } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {loading && <div>Loading....</div>}
      {blogs && <Bloglist blogs={blogs} title='All Blogs'></Bloglist>}
    </div>
  );
}
export default Home;