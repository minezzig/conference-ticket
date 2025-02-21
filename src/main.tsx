import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Ticket from "./components/Ticket.tsx";
import Home from "./components/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
