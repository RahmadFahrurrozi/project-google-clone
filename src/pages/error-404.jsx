import { useRouteError } from "react-router-dom";
import Button from "../components/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-red-500 font-medium mb-8">
          {error.message || error.statusText || "Error 404: Page Not Found"}
        </p>
        <Link to="/">
          <Button variant="bg-blue-600">Go to home page</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
