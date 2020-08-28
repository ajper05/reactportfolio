import React from "react";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";


export default function Contact() {
  return (
    <div>
      <Header />
      <div className="container text-center">
        <h1>My Contact Information:</h1>
        <a href="https://github.com/ajper05">
          <h2 className="ghicon"> Github</h2>
        </a>
        <a href="https://www.linkedin.com/in/anthony-perez-5040b2a4/">
          <h2 className="inicon"> LinkedIn</h2>
        </a>
        <h3>Email: anthony.perez0105@gmail.com</h3>
      </div>
      <Footer/>
    </div>
  );
}
