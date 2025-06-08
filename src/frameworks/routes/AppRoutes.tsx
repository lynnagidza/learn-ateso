import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../../interface/views/landingPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* We'll add About, Greetings, etc later */}
      </Routes>
    </BrowserRouter>
  );
}
