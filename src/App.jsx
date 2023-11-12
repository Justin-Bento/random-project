import { Route, Routes } from "react-router-dom";
/*  
  The `Routes` component serves as a container/parent for all individual routes in our app.
  The `Route` component is used to define a single route. It has two attributes:
    1. `path`: Specifies the URL path for the desired component.
    2. `element`: Specifies the component to be rendered for the given route.
*/
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MarketingNavbar from "./components/MarketingNavbar";

export default function App() {
  return (
    <>
      {/* Display the MarketingNavbar component on top of all routes */}
      <MarketingNavbar />
      {/* Define the routes using the `Routes` component */}
      <Routes>
        {/* The root path ("/") renders the Home component */}
        <Route path="/" element={<Home />} />

        {/* The "/about" path renders the About component */}
        <Route path="/about" element={<About />} />

        {/* The "/contact" path renders the Contact component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
