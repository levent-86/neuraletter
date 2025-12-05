import { Link } from 'react-router-dom';
import { GrPrevious } from 'react-icons/gr';

export const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-3xl font-semibold mt-6">Page Not Found</h2>
      <p className="mt-3 text-lg opacity-70">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" className="btn btn-accent mt-8">
        <GrPrevious /> Turn back to homepage
      </Link>
    </div>
  );
};
