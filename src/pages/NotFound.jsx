import { Link } from "react-router-dom";

const NotFound = () => {
  
  return (
    <div>
      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 inline-block mt-8 py-3 font-semibold rounded bg-slate-800 text-white border text-sm hover:opacity-90 transition-opacity"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound;
