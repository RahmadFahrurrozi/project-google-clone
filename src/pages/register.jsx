import React from "react";
import AuthLayout from "../layout/authLayout";
import LeftAuth from "../fragments/fragmentsAuth/left-Auth-Register";
import AuthForm from "../fragments/fragmentsAuth/auth-form";

const Register = () => {
  return (
    <AuthLayout>
      <LeftAuth />
      <AuthForm types="register" />
    </AuthLayout>
  );
};

export default Register;
