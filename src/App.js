import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbars from "./Components/Navbar";

// Pages
import Beranda from "./Pages/Beranda";
import Berita from "./Pages/Berita";
import Galeri from "./Pages/Galeri";
import Tentang from "./Pages/Tentang-Kami";
import Kotak_Saran from "./Pages/Kotak-Saran";
import Peringatan from "./Pages/Peringatan";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        
        <Routes>
          <Route path="/" exact element={<Beranda />} />

          <Route path="/Berita" exact element={<Berita />} />

          <Route path="/Galeri" exact element={<Galeri />} />

          <Route path="/Tentang-Kami" exact element={<Tentang />} />

          <Route path="/Kotak-Saran" exact element={<Kotak_Saran />} />

          <Route path="/Peringatan" exact element={<Peringatan />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
