import React from "react";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>About Me</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img
              src={require("../res/img/temp_headshot.jpg")}
              alt="Headshot of myself "
              width={250}
              height={250}
              className="img-thumbnail"
            />
          </div>
          <div className="col-8" id="summaryBox">
            <p>
              Welcome to my portfolio page! I will be updating this page
              throughout the course of my time in the UW Full Stack Web
              Development bootcamp.
            </p>
            <br />
            <p>
              Please look around and don't hesitate to reach out regarding
              employment opportunities, project collaborations or questions of
              any kind. Thank you!
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
