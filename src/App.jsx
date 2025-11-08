import React from "react";
import NavBar from "./components/NavBar";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Catalog /> {/* This renders all your products */}
      <Footer />
    </>
  );
}

export default App;


