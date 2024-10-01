import React from "react";
import AuthLayout from "../layout/authLayout";
import AuthForm from "../fragments/fragmentsAuth/auth-form";
import LeftAuth from "../fragments/fragmentsAuth/left-auth";

const Register = () => {
  return (
    <AuthLayout>
      <LeftAuth types="register" />
      <AuthForm types="register" />
    </AuthLayout>
  );
};

export default Register;
