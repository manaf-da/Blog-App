import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-[#247b7b] text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/">
              {" "}
              <h2 className="font-bold text-4xl">My Blog</h2>
            </Link>
          </div>
          <div className="relative ">
            <label htmlFor="Search" className="sr-only">
              {" "}
              Search{" "}
            </label>
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full text-gray-600  rounded-sm border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 text-lg hover:text-gray-700"
              >
                <AiOutlineSearch />
              </button>
            </span>
          </div>

          <div className="md:flex md:items-center md:gap-12 cursor-pointer">
            <nav aria-label="Global" className="hidden md:block">
              <Link to="/createBlog">
                <span className=" font-bold text-2xl transition  hover:text-gray-500/75">
                  CreateBlogs
                </span>
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <Link to="/login">
                    <button className="rounded-sm w-20 font-semibold bg-[#3066be] px-5 py-2.5 text-sm  text-white">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
