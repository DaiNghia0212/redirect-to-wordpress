import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LaptopGaming from "./posts/LaptopGaming";
import LaptopOffice from "./posts/LaptopOffice";
import reportWebVitals from "./reportWebVitals";
import AcerNitro5 from "./posts/AcerNitro5Eagle";
import LogitechProX from "./posts/LogitechProX";
import GamingMonitor from "./posts/GamingMonitor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/laptop-acer-nitro" element={<LaptopGaming />} />
      <Route path="/acer-nitro-5-eagle" element={<AcerNitro5 />} />
      <Route path="/logitech-pro-x" element={<LogitechProX />} />
      <Route path="/gigabyte-g24f" element={<GamingMonitor />} />
      <Route path="/laptop-msi-modern" element={<LaptopOffice />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
