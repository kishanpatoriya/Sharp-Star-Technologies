import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Loader() {
  return (
   <div className="loader-screen">
      <div className="loader-wrapper">

        <span className="ring ring1"></span>
        <span className="ring ring2"></span>
        <span className="ring ring3"></span>

        <img src={logo} alt="Logo" className="loader-logo" />

      </div>
    </div>
  );
}