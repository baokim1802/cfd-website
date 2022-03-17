import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout({ children }) {
  console.log("Children", children);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
