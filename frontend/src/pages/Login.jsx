import CustomInput from "../component/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="mx-auto bg-white max-w-screen-sm px-2 py-20 sm:px-6 lg:px-8 ">
        <div className="mx-auto mb-0 max-w-md space-y-4">
          <h3 className="text-center font-semibold text-2xl">Login</h3>
          <p className="text-center font-semibold text-xs text-gray-500 capitalize">
            Login to access other features
          </p>
          <div>
            <CustomInput
              type="email"
              className="w-full rounded-sm  border-gray-200 p-3 pe-12 text-sm shadow-sm"
              name="email"
              placeholder="Email..."
            />
          </div>
          <div>
            <CustomInput
              type="password"
              className="w-full rounded-sm  border-gray-200 p-3 pe-12 text-sm shadow-sm"
              name="password"
              placeholder="Password..."
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link
                to="/register"
                className="transition hover:underline hover:text-red-600"
              >
                Sign up
              </Link>
            </p>
            <div className="flex-grow flex items-end justify-end">
              <span className="inline-block whitespace-nowrap bg-yellow-300 px-5 py-3 text-center text-sm font-semibold capitalize text-gray-900 transition hover:bg-yellow-400">
                Submit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
