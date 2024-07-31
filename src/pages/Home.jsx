import { Link } from "react-router-dom";
import { useIsAuth } from "../hooks/useIsAuth";
import { FiLogIn } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";

const Home = () => {
  const { isAuth } = useIsAuth()

  return (
    <div className="h-[70dvh] grid place-content-center">
      <div className="bg-white w-fit p-10 rounded-2xl shadow-md space-y-5">
        <h1 className="text-2xl sm:text-3xl font-bold max-sm:text-center text-slate-800">
          {!isAuth ? "Welcome, Please Login to Proceed" : "Hello there 🙋‍♂️, good to see you again"}
        </h1>
        <Link
          to={`${isAuth ? "/profile" : "/auth"}`}
          className="bg-blue-500 hover:opacity-90 active:opacity-100 transition-opacity text-white w-fit px-4 py-2.5 rounded-lg flex items-center gap-1 mx-auto"
        >
          <span className="text-sm text-gray-200">{isAuth ? "Go to Profile" : "Login"}</span>
          {!isAuth ? <FiLogIn className="text-lg" /> : <LuUser2 className="text-lg" />}
        </Link>
      </div>
    </div>
  )
}

export default Home;
