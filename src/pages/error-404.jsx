import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <h1>Error 404</h1>
      <p>{error.message || error.statusText}</p>
    </section>
  );
};

export default ErrorPage;
