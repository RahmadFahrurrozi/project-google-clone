import React from "react";
import Button from "../components/button";
import AuthLayout from "../layout/authLayout";
import Input from "../components/input/inputAuth";

export default function Login() {
  return (
    <AuthLayout>
      <div className="w-full flex items-start gap-6 justify-start flex-col lg:w-1/2">
        <img
          className="w-11 h-11"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
          alt="logo Google"
        />
        <h1 className="text-4xl font-normal ">Login</h1>
        <p className="text-base">Lanjutkan ke Google drive</p>
      </div>
      <form action="" className="w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <Input />
          <p className="text-blue-600 font-medium cursor-pointer">
            Lupa email ?
          </p>
          <div className="flex flex-col my-5">
            <p>
              Bukan komputer Anda? Gunakan mode Tamu untuk login secara pribadi.
            </p>
            <p className="text-blue-600 font-medium cursor-pointer">
              Pelajari lebih lanjut cara menggunakan Mode tamu
            </p>
          </div>
          <div className="flex gap-4 justify-end my-7 items-center">
            <p className="text-blue-600 font-medium">
              don’t have an account?{" "}
              <span className="cursor-pointer">Register</span>
            </p>
            {/* <Button></Button> */}
            <Button variant="bg-blue-600">Login</Button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
