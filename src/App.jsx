// Import necessary components and routing elements from react-router-dom
import { Route, Routes } from "react-router-dom";

// Import global components for the marker application
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import { appbar, footer } from "./lib/data";

// Import pages for the marketing section
import Home from "./pages/marketing/Home";
import About from "./pages/marketing/About";
import Contact from "./pages/marketing/Contact";

// Import pages for the app section
import Dashboard from "./pages/app/Dashboard";
import Folder from "./pages/app/Folder";
import Bookmarks from "./pages/app/Bookmarks";

// Define the main App component
export default function App() {
  // Return the Routes element to define the routing structure
  return (
    <>
      <Appbar Navigtion={appbar} />
      <Routes>
        {/* Marketing Section Routes */}
        <Route path="/">
          {/* Home page */}
          <Route index element={<Home />} />
          {/* About page */}
          <Route path="about" element={<About />} />
          {/* Contact page */}
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* App Section Routes */}
        <Route path="/dashboard">
          {/* Dashboard page */}
          <Route index element={<Dashboard />} />
          {/* Folders page */}
          <Route path="folders" element={<Folder />} />
          {/* Bookmarks page with dynamic parameter */}
          <Route path="folders/:id" element={<Bookmarks />} />
        </Route>
      </Routes>
      <Footer Navigation={footer} />
    </>
  );
}
