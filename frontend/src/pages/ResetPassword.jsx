import CustomInput from "../component/CustomInput";

const ResetPassword = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="mx-auto bg-white max-w-screen-sm px-2 py-20 sm:px-6 lg:px-8 ">
        <div className="mx-auto mb-0 max-w-md space-y-4">
          <h3 className="text-center font-semibold text-2xl">Reset Password</h3>
          <p className="text-center font-semibold text-xs text-gray-500 capitalize">
            create new password
          </p>
          <div>
            <CustomInput
              type="password"
              className="w-full rounded-sm  border-gray-200 p-3 pe-12 text-sm shadow-sm"
              name="password"
              placeholder="Password..."
            />
          </div>
          <div>
            <CustomInput
              type="password"
              className="w-full rounded-sm  border-gray-200 p-3 pe-12 text-sm shadow-sm"
              name="password"
              placeholder="Confirm Password..."
            />
          </div>

          <div className="flex-grow flex items-end justify-end">
            <span className="inline-block whitespace-nowrap bg-yellow-300 px-5 py-3 text-center text-sm font-semibold capitalize text-gray-900 transition hover:bg-yellow-400">
              Reset
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
