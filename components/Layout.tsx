import React from "react";
import Footer from "../components/Footer";

export default function Layout({ children }: any) {
  return (
    <div className="w-full min-h-screen bg-chritsmasTree bg-no-repeat bg-cover bg-center text-white">
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-800 bg-opacity-40 px-9 md:px-32 pb-5 font-typography">
        {children}
        <Footer />
      </div>
    </div>
  );
}
