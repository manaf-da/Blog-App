import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#247b7b] text-white ">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <Link to="/">
            <h2 className="text-4xl font-bold">My Blog</h2>
          </Link>
        </div>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <Link to="/createBlog" className="text-2xl">
            <span className="font-bold  transition hover:text-gray-700/75">
              CreateBlog
            </span>
          </Link>
        </div>
        <ul className="mt-12 flex text-4xl  justify-center gap-6 md:gap-8 ">
          <li className="hover:text-[#449dd1]">
            <AiOutlineFacebook />
          </li>
          <li className="hover:text-[#449dd1]">
            <AiOutlineGithub />
          </li>
          <li className="hover:text-[#449dd1]">
            <AiOutlineTwitter />
          </li>
          <li className="hover:text-[#449dd1]">
            <AiOutlineInstagram />
          </li>
          <li className="hover:text-[#449dd1]">
            <AiOutlineYoutube />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
