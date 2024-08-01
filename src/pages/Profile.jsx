import Wrapper from "../components/Wrapper";
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/features/userSlice"
import { Loader_Ring_2 } from "../components/loader/Loader";

const Profile = () => {
  const { loading } = useSelector((store) => store.currentUser)
  const dispatch = useDispatch()

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
              onClick={() => dispatch(logout())}
              disabled={loading}
              type="button"
              className="text-sm bg-[#005aa6] hover:opacity-90 active:opacity-100 transition-opacity text-white rounded-3xl px-8"
              style={{opacity: loading ? "70%" : "100%", paddingBlock: loading ? "5px" : "10px"}}
            >
              <span style={{ display: loading ? "none" : "inline" }}>
                Log Out
              </span>
              {loading && (
                <span className="w-fit mx-auto block">
                  <Loader_Ring_2 color="white" size={28} />
                </span>
              )}
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
  );
}

export default Profile;
