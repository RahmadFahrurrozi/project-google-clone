import React from "react";
import { Link } from "react-router-dom";

export default function ForgotLink({ children, className = "" }) {
  return (
    <Link
      to="/forgot-password"
      className={`text-blue-500 cusrsor-pointer font-medium inline ${className}`}
    >
      {children}
    </Link>
  );
}
