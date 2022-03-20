import NAVBAR from "./componets/NAVBAR.jsx";
import Hero from "./componets/hero.jsx";
import Footer from "./componets/footer.jsx";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setmode] = useState(false);
  const handleTheme = () => {
    setmode(!mode);
  };
  return (
    <div
      className={
        mode
          ? "bg-gray-800 text-gray-300 min-h-[100vh]"
          : "bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0] min-h-[99vh]"
      }
    >
      <BrowserRouter>
        <NAVBAR handleTheme={handleTheme} mode={mode} />
        <Hero />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
