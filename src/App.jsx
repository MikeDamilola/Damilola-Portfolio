import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import See9jaProject from "./pages/See9jaProject";
import FarmilyProject from "./pages/FarmilyProject";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/see9ja" element={<See9jaProject />} />
        <Route path="/projects/farmily" element={<FarmilyProject />} />
      </Routes>
    </BrowserRouter>
  );
}
