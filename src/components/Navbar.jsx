import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-6 bg-white text-center">
      <Link to="/" className="inline-block w-50">
        <img src="/assets/logo.svg" alt="" className="w-full" />
      </Link>
    </div>
  )
}

export default Navbar;
