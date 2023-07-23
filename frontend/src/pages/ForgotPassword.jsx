import CustomInput from "../component/CustomInput";

const ForgotPassword = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="mx-auto bg-white max-w-screen-sm px-2 py-20 sm:px-6 lg:px-8 ">
        <div className="mx-auto mb-0 max-w-md space-y-4">
          <h3 className="text-center font-semibold text-2xl">
            Forgot Password
          </h3>
          <p className="text-center font-semibold text-xs text-gray-500 capitalize">
            We will send you to reset your password in your email
          </p>
          <div>
            <CustomInput
              type="email"
              className="w-full rounded-sm  border-gray-200 p-3 pe-12 text-sm shadow-sm"
              name="email"
              placeholder="Email..."
            />
          </div>

          <div className="flex-grow flex items-end justify-end">
            <span className="inline-block whitespace-nowrap bg-yellow-300 px-5 py-3 text-center text-sm font-semibold capitalize text-gray-900 transition hover:bg-yellow-400">
              Submit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
