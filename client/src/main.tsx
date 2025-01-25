import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router";
import Chat from "./pages/chat/Chat";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/chat/:subject/:teacher" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
