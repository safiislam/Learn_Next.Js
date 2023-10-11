import Navbar from "@/Components/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return <div>
    <Navbar />
    {children}
    Footer
    </div>;

};

export default MainLayout;
