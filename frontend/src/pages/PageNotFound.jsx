import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-500 text-9xl">404</h1>
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>
          <p className="mt-4 text-gray-500">We cannot find that page.</p>
          <Link to="/">
            <span className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-[#2d898b] rounded hover:bg-[#2d898b] focus:outline-none focus:ring">
              Go Back Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
