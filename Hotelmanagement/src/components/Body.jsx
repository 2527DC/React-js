import React from "react";
import "./Body.css";
import NavBar from "./NavBar";
import WelcomeMessage from "./Welcome";
import Section3 from "./Section3";
import Carousel from "./Carousel";

const Body = () => {
  return (
    <>
      <div
        className="first-section  h-[650px]"
        style={{ backgroundImage: `url('public/background.webp')` }}
      >
        <div className="navbar">
          <NavBar></NavBar>
        </div>
        <center className="welcome  p-0">
          <WelcomeMessage></WelcomeMessage>
        </center>
      </div>

      <div className="second-session m-8  mt-10 flex ">
        <div className="row   mt-1">
          <div className="col-md-5 bg-cb-mlight">
          <span className="text-xl text-gray-500 block ">Zen Hotel</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-400 font-extrabold  inline-block">
              ABOUT US
            </h1>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident suscipit magni quam, et ipsum ex maiores doloremque
              optio a cum consequatur, iusto architecto minima tenetur sunt!
              Natus maxime repellat beatae?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident suscipit magni quam, et ipsum ex maiores doloremque
              optio a cum consequatur, iusto architecto minima tenetur sunt!
              Natus maxime repellat beatae?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident suscipit magni quam, et ipsum ex maiores doloremque
              optio a cum consequatur, iusto architecto minima tenetur sunt!
              Natus maxime repellat beatae?
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident suscipit magni quam, et ipsum ex maiores doloremque
              optio a cum consequatur, iusto architecto minima tenetur sunt!
              Natus maxime repellat beatae?
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident suscipit magni quam, et ipsum ex maiores doloremque
              optio a cum consequatur, iusto architecto minima tenetur sunt!
              Natus maxime repellat beatae?
            </p>
          </div>
          <div className="col-sm-7 d-sm-block h-50 mt-3 ">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="third-section mt-5"></div>
      <div className="section-four m-10">
        <h1 className="text-7xl text-red-500 m-1 p-1 font-bold "> Book Rooms</h1>
        <Section3></Section3>
      </div>
    </>
  );
};

export default Body;
