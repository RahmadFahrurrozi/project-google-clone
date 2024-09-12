import React from "react";
import AuthLayout from "../layout/authLayout";
import LeftAuth from "../fragments/fragmentsAuth/left-Auth-Login";
import AuthForm from "../fragments/fragmentsAuth/auth-form";

const Login = () => {
  return (
    <AuthLayout>
      <LeftAuth />
      <AuthForm types="login" />
    </AuthLayout>
  );
};

export default Login;
