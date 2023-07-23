import { AiOutlineEdit } from "react-icons/ai";
const Blog = () => {
  return (
    <div className="flex flex-col items-center p-10  ">
      <div className="overflow-hidden rounded-sm w-2/3 p-4 shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-[600px] w-full object-cover"
        />
        <div className="bg-white p-8 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            10th Oct 2022
          </time>

          <h3 className="mt-0.5 text-lg text-gray-900">
            How to position your furniture for positivity
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
        <div className="flex-grow flex items-end justify-end">
          <span className="inline-flex whitespace-nowrap bg-yellow-300 px-5 py-3 text-center text-sm font-semibold capitalize text-gray-900 transition hover:bg-yellow-400">
            Edit
            <AiOutlineEdit className="ml-1 text-base" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
