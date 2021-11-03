import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
