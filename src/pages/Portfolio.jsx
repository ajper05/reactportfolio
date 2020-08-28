import React from "react";
import Header from "../components/core/Header";
import PortfolioCard from "../components/common/PortfolioCard";
import Footer from "../components/core/Footer";


export default function Portfolio() {
  return (
    <div>
      <Header />
      <div className="d-flex p-2">
        <div className="row">
          <PortfolioCard
            imgSrcPath={require("../res/img/moodindigo.png")}
            cardTitle={"Project 1: Mood Indigo"}
            href={"https://epachols.github.io/moodIndigo/"}
            btnText={"Check It Out"}
          />
          <PortfolioCard
            imgSrcPath={require("../res/img/spontaneous.png")}
            cardTitle={"Project 2: Spontaneously Now"}
            href={"https://spontaneouslynow.herokuapp.com/"}
            btnText={"Check It Out"}
          />

          <PortfolioCard
            imgSrcPath={require("../res/img/weatherdash.JPG")}
            cardTitle={"Homework: Weather Dashboard"}
            href={"https://ajper05.github.io/weatherdashboard/"}
            btnText={"Check It Out"}
          />
          <PortfolioCard
            imgSrcPath={require("../res/img/passgenerator.JPG")}
            cardTitle={"Assignment: Password Generator"}
            href={"https://ajper05.github.io/passwordgenerator/"}
            btnText={"Check It Out"}
          />
          <PortfolioCard
            imgSrcPath={require("../res/img/readmecli.jpg")}
            cardTitle={"Assignment: Readme Generator *Command line Only*"}
            href={"https://github.com/ajper05/readmegenerator"}
            btnText={"Github Repo"}
          />
          <PortfolioCard
            imgSrcPath={"http://placekitten.com/g/200/200"}
            cardTitle={"Coming Soon!"}
            href={"#a"}
            btnText={"Coming Soon!"}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
