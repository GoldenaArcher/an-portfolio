import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Contact from "../components/contact";
import Home from "../components/home";
import Portfolio from "../components/portfolio";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
