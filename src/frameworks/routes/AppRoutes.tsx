import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import LandingPage from "../../interface/views/LandingPage";
import GreetingsPage from "../../interface/views/GreetingsPage";
import ProverbsPage from "../../interface/views/ProverbsPage";
import LeaveLessonPage from "../../interface/views/LeaveLessonPage";
import AboutPage from "../../interface/views/AboutPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/greetings" element={<GreetingsPage />} />
        <Route path="/proverbs" element={<ProverbsPage />} />
        <Route path="/leave-lesson" element={<LeaveLessonPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
