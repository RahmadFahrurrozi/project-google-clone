import React from "react";
import AuthLayout from "../layout/authLayout";
import AuthForm from "../fragments/fragmentsAuth/auth-form";
import LeftAuth from "../fragments/fragmentsAuth/left-auth";

const Login = () => {
  return (
    <AuthLayout>
      <LeftAuth types="login" />
      <AuthForm types="login" />
    </AuthLayout>
  );
};

export default Login;
