import { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { useForm } from "react-hook-form";
import { emailRegex } from "../utils";
import { signIn, register } from "../store/features/userSlice"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion"
import { FiEyeOff, FiEye   } from "react-icons/fi";
import { Loader_Ring_2 } from "../components/loader/Loader"

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isPassVisible, setPassIsVisible] = useState(false)
  const { loading, error: serverError } = useSelector((store) => store.currentUser)
  const dispatch = useDispatch()


  const {
    handleSubmit,
    register: registerForm,
    unregister,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm()

  const submitCallback = async (data, e) => {
    e.preventDefault()

    if (isLogin) {
        dispatch(signIn({credentials: data}))
    } else {
        dispatch(register({formData: data}))
    }
  }

  useEffect(() => {
    unregister("email")
    clearErrors("root")
  }, [isLogin])

  useEffect(() => {
    if (serverError) setError("root", {message: serverError})
  }, [serverError])

  return (
    <Wrapper>
      <div className="flex items-center rounded-3xl overflow-clip bg-white lg:h-[600px] mt-5">
        <form
          onSubmit={handleSubmit(submitCallback)}
          className={`p-10 md:p-14 basis-full lg:basis-[45%] ${
            !isLogin ? "space-y-5" : "space-y-8"
          }`}
        >
          <motion.div layout className="space-y-2">
            <h1 className="text-3xl font-bold">
              {isLogin ? "Sign in" : "Register"}
            </h1>
            <span className="block text-gray-400">
              Please {isLogin ? "login" : "register"} to continue to your
              account
            </span>
          </motion.div>
          <div className={`${!isLogin ? "space-y-5" : "space-y-8"}`}>
            <InputField label="Username">
              <div>
                <input
                  type="text"
                  {...registerForm("username", {
                    required: "username is required",
                    minLength: {
                      value: 3,
                      message: "username must be atleast 3 characters",
                    },
                  })}
                  className={`w-full p-2 rounded-md outline outline-2 outline-gray-300 focus-visible:outline-blue-500 ${
                    errors?.username && "outline-red-500"
                  }`}
                  disabled={loading}
                />
                {errors?.username && (
                  <small className="text-red-500">
                    {errors?.username?.message}
                  </small>
                )}
              </div>
            </InputField>
            {!isLogin && (
              <motion.div animate={{opacity: [0, 1], scale: [0, 1]}} transition={{duration: .3}} className="origin-left">
                <InputField label="Email">
                <div>
                  <input
                    type="email"
                    {...registerForm("email", {
                      required: "email is required",
                      pattern: {
                        value: emailRegex,
                        message: "Invalid email address",
                      },
                    })}
                    disabled={loading}
                    className={`w-full p-2 rounded-md outline outline-2 outline-gray-300 focus-visible:outline-blue-500 ${
                      errors?.email && "outline-red-500"
                    }`}
                  />
                  {errors?.email && (
                    <small className="text-red-500">
                      {errors?.email?.message}
                    </small>
                  )}
                </div>
              </InputField>
              </motion.div>
            )}
            <InputField label="Password">
              <div className="relative">
                <input
                  type={isPassVisible ? "text" : "password"}
                  {...registerForm("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password should be atleast 6 characters",
                    },
                  })}
                  disabled={loading}
                  className={`w-full p-2 rounded-md outline outline-2 outline-gray-300 focus-visible:outline-blue-500 ${
                    errors?.password && "outline-red-500"
                  }`}
                />
                {errors?.password && (
                  <small className="text-red-500">
                    {errors?.password?.message}
                  </small>
                )}
                <motion.button type="button" className="absolute right-4 top-1.5 bg-white text-gray-500 p-1 text-lg" onClick={() => setPassIsVisible(prev => !prev)}>
                  {!isPassVisible ? <FiEyeOff /> : <FiEye />}
                </motion.button>
              </div>
            </InputField>
            <motion.div layout className="text-sm text-center">
              {isLogin ? (
                <span>
                  Don't have an account?{" "}
                  <button
                    disabled={loading}
                    type="button"
                    className="text-blue-500 hover:underline disabled:no-underline disabled:opacity-70"
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{" "}
                  <button
                    disabled={loading}
                    type="button"
                    className="text-blue-500 hover:underline disabled:no-underline disabled:opacity-70"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                </span>
              )}
            </motion.div>
          </div>
          <div className="grid justify-items-center gap-4">
            <motion.button
              layout
              type="submit"
              disabled={loading}
              className="text-sm bg-[#005aa6] hover:opacity-90 active:opacity-100 transition-opacity text-white rounded-3xl px-8 !mt-5 disabled:opacity-70"
              style={{ width: loading ? "fit-content" : "100%", paddingBlock: loading ? "5px" : "10px"}}
            >
              <span style={{display: loading ? "none" : "inline"}}>{isLogin ? "SIGN IN" : "Register"}</span>
              {loading && (
                <motion.span animate={{opacity: [0, 1]}} transition={{delay: .25}} className="w-fit mx-auto block">
                  <Loader_Ring_2 color="white" size={28} />
                </motion.span>
              )}
            </motion.button>
            {loading && <small className="font-medium text-gray-500">Please wait...</small>}
            {errors?.root && <small className="font-medium text-red-500">{errors?.root?.message}</small>}
          </div>
        </form>
        <div className="bg-gray-200 h-full flex-grow max-lg:hidden">
          <img
            src="/assets/frame.jpg"
            alt=""
            className="size-full object-cover"
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default Auth;
