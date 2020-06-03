import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Main(props) {
  return (
    <>
      <Header />
      <div className="children-container">{props.children}</div>
      <Footer />
    </>
  );
}
