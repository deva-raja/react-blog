const { Link } = require('react-router-dom');

function NotFound() {
  return (
    <div>
      <h2>Sorry</h2>
      <p>Page Not Found</p>
      <Link to='/'>Go to Home Page</Link>
    </div>
  );
}

export default NotFound;
