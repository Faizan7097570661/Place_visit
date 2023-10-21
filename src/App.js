import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import Offer from "./components/Offers/Offer";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offer />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
