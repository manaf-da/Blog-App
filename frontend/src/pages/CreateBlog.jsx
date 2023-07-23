import CustomInput from "./../component/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { AiOutlineClose } from "react-icons/ai";

const CreateBlog = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="mx-auto bg-white max-w-screen-sm px-2 py-20 sm:px-6 lg:px-8 ">
        <div className="mx-auto mb-0 max-w-md space-y-4">
          <h3 className="text-center font-semibold text-2xl">Create A Blog</h3>
          <p className="text-center font-semibold text-xs text-gray-500">
            What is on your mind?
          </p>
          <div>
            <CustomInput
              type="text"
              className="w-full rounded-sm  border-gray-200 p-3 pe-12 text-sm shadow-sm"
              name="title"
              placeholder="Title..."
            />
          </div>
          <div>
            <ReactQuill theme="snow" name="description" className="h-30" />
          </div>
          <div>
            <div className="bg-gray-100 border-gray-900 p-10 text-center shadow">
              <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="text-xs text-gray-600">
                        Drag and drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </div>
          <div className="shadow bg-gray-100 border-gray-900 flex p-10 flex-wrap gap-3">
            <div className="relative ">
              <button className="t-12 right-1 absolute ">
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="flex-grow flex items-end justify-end">
            <span className="inline-block whitespace-nowrap bg-yellow-300 px-5 py-3 text-center text-sm font-semibold capitalize text-gray-900 transition hover:bg-yellow-400">
              Post
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
