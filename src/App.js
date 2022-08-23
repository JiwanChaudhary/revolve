import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./GlobalStyle.css"
import Appbar from "./components/Appbar";
import { useEffect } from "react"
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    document.title = "Revolve Nepal"
  }, []);

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
