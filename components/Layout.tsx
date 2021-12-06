import React from "react";
import Footer from "../components/Footer";

export default function Layout({ children }: any) {
  return (
    <div className="w-full min-h-screen  bg-chritsmasTree bg-no-repeat bg-cover bg-center text-white">
      <div className="min-h-screen flex flex-col justify-center items-center w-full p-32 bg-gray-800 bg-opacity-40">
        {children}
        <Footer />
      </div>
    </div>
  );
}
