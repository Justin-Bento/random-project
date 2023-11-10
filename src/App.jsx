import { Route, Routes } from "react-router-dom";
/*  
  Routes as a container/parent for all the individual  routes that will bre created in our app
  Route is used to create single route. It takes two arrtibutes: 
    1. Path, specifies the URL path of the desired component. You can call this pathname whatever you want. Above, you'll notice that the first pathname is a backslash (/). Any component whose pathname is a backslash will get rendered first whenever the app loads for the first time. This implies that the Home component will be the first component to get rendered.
    2. Element, specifies the componment the route should render.
*/
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MarketingNavbar from "./components/MarketingNavbar";

export default function App() {
  return (
    <>
      <div>
        <MarketingNavbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
