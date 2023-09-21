import "./App.css";
import React from "react";
import NavbarComp from "./components/NavbarComp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PhelbotomyPolicy from "./pages/PhelbotomyPolicy";
import Phlebotomy from "./pages/Phlebotomy";
import CPRTraining from "./pages/CPRTraining";
import CNATraining from "./pages/CNATraining";
import CNAPolicy from "./pages/CNAPolicy";
import CPRPolicy from "./pages/CPRPolicy";
import AllCourses from "./components/AllCourses";
import Form from "./pages/Form";
function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phlebotomy" element={<Phlebotomy />} />
        <Route path="/phlebotomy-policy" element={<PhelbotomyPolicy />} />
        <Route path="/cpr" element={<CPRTraining />} />
        <Route path="/cna" element={<CNATraining />} />
        <Route path="/cna-policy" element={<CNAPolicy />} />
        <Route path="/cpr-policy" element={<CPRPolicy />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
