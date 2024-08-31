import React from "react";

export default function Input() {
  return (
    <input
      className="w-full p-4 border border-slate-300 active:border-blue-600 rounded-lg mt-14"
      type="email"
      placeholder="Masukkan email atau nomor telepon"
    />
  );
}
