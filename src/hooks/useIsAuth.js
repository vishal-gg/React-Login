import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useIsAuth = () => {
  const { userInfo } = useSelector((store) => store.currentUser)
  const isAuth = useMemo(() => !!userInfo, [userInfo])
  return { isAuth }
}
