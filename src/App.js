import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbars from "./Components/Navbar";

// Pages
import Beranda from "./Pages/Beranda";
import Berita from "./Pages/Berita";
import Dokumentasi from "./Pages/Dokumentasi";
import Tentang from "./Pages/Tentang-Kami";
import Kotak_Saran from "./Pages/Kotak-Saran";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        
        <Routes>
          <Route path="/" exact element={<Beranda />} />

          <Route path="/Berita" exact element={<Berita />} />

          <Route path="/Dokumentasi" exact element={<Dokumentasi />} />

          <Route path="/Tentang-Kami" exact element={<Tentang />} />

          <Route path="/Kotak-Saran" exact element={<Kotak_Saran />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
