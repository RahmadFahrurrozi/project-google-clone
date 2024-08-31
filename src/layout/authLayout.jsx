import React from "react";

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <section className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto p-8 bg-white rounded-xl">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
