import React from "react";
import Navbar from "../fragments/navbar";
import Footer from "../fragments/footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
