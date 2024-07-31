import { Navigate } from "react-router-dom"
import { useIsAuth } from "../hooks/useIsAuth"

const ProtectRoute = ({children, isProtected  = true}) => {
    const { isAuth } = useIsAuth()

    if (isProtected) {
        return isAuth ? children : <Navigate to="/auth" replace />
    } else {
        return isAuth ? <Navigate to="/" replace /> : children
    }

    // The isProtected variable redirects authenticated users from the login page and 
    // protects other routes.
}

export default ProtectRoute;