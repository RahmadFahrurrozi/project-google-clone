import React from "react";
import Input from "../../components/atomsAuth/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const AuthForm = (props) => {
  const { types } = props;
  return (
    <form action="" className="w-full lg:w-1/2">
      <div className="flex flex-col gap-4">
        <Input
          className="mt-10"
          placeholder="Masukkan email atau nomor telepon"
          type="text"
          name="emailNotelphone"
        />
      </div>
      <div className="flex flex-col my-5">
        <p>
          Bukan komputer Anda? Gunakan mode Tamu untuk login secara pribadi.
        </p>
        <p className="text-blue-600 font-medium cursor-pointer">
          Pelajari Lebh Lanjut cara menggunakan Mode tamu
        </p>
      </div>
      {AuthNavigation({ types })}
    </form>
  );
};

const AuthNavigation = ({ types }) => {
  if (types === "register") {
    return (
      <div className="flex gap-4 justify-end my-7 items-center">
        <p className="font-medium">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-600 cursor-pointer">Login</span>
          </Link>
        </p>
        <Button variant="bg-blue-600">Register</Button>
      </div>
    );
  } else {
    return (
      <div className="flex gap-4 justify-end my-7 items-center">
        <p className="font-medium">
          don’t have an account?{" "}
          <Link to="/register">
            <span className="text-blue-600 cursor-pointer">Register</span>
          </Link>
        </p>
        <Button variant="bg-blue-600">Login</Button>
      </div>
    );
  }
};
export default AuthForm;
