import { InputField } from "../components/InputField";
import Wrapper from "../components/Wrapper";

const Profile = () => {
  return (
    <Wrapper>
        <div className="flex items-center rounded-3xl overflow-clip bg-white lg:h-[600px] mt-5">
          <form className="space-y-8 p-10 md:p-14 basis-full lg:basis-[45%] max-lg:text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Congratulations!</h1>
              <span className="block text-lg text-gray-400">
                I have successfully completed <br /> my task.
              </span>
            </div>
            <div>
              <button
                type="button"
                className="text-sm bg-[#005aa6] hover:opacity-90 active:opacity-100 transition-opacity text-white rounded-3xl py-2.5 px-8"
              >
                Log Out
              </button>
            </div>
          </form>
          <div className="bg-gray-200 h-full flex-grow max-lg:hidden">
            <img
              src="/assets/frame2.jpg"
              alt=""
              className="size-full object-cover"
            />
          </div>
        </div>
    </Wrapper>
  )
}

export default Profile;
