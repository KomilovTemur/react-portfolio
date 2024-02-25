import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Route, Routes } from "react-router-dom";
import Messages from "./pages/Messages";
function App() {
  return (
    <div>
      <SpeedInsights />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
