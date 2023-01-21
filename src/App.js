import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./componants/Header/Header";
import BarLeft from "./componants/BarLeft/BarLeft";

function App() {
  return (
    <Router>
      <Header />
      <BarLeft />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
        <Route path="/housing/*" element={<Error />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
