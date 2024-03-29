import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Pages/img/Logo.png';
import { Link } from "react-router-dom";
import { House, HouseFill, Newspaper, Mortarboard, PersonVcard, BoxSeam, Images, ExclamationOctagonFill, ExclamationOctagon, BoxSeamFill } from "react-bootstrap-icons";

// Elemen CSS
import './Navbar/Navbar.css';
import './Navbar/Responsive.css';
import './Navbar/Logo.css'

function Navbars() {
  const [expanded, setExpanded] = useState(false);
  const [isWarningActive, setIsWarningActive] = useState(false);
  const [isBoxActive, setIsBoxActive] = useState(false);
  const [isHouseActive, setIsHouseActive] = useState(false);

  useEffect(() => {
    const handleUnload = () => {
      setIsWarningActive(false); // Reset ikon peringatan saat pengguna meninggalkan halaman
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  const closeNavbar = () => {
    setExpanded(false);
    setIsWarningActive(false); // Reset ikon peringatan saat menutup navbar
    setIsBoxActive(false); // Reset ikon kotak saran saat menutup navbar
    setIsHouseActive(false);
  };

  const handleWarningSelect = () => {
    setIsWarningActive(true);
    setIsBoxActive(false); // Menonaktifkan ikon kotak saran jika sebelumnya aktif
    setIsHouseActive(false);
    setExpanded(false); // Menutup navbar saat salah satu link diklik
  };

  const handleBoxSelect = () => {
    setIsBoxActive(true);
    setIsHouseActive(false);
    setIsWarningActive(false); // Menonaktifkan ikon peringatan jika sebelumnya aktif
    setExpanded(false); // Menutup navbar saat salah satu link diklik
  };

  const handleHouseSelect = () => {
    setIsHouseActive(true);
    setIsBoxActive(false);
    setIsWarningActive(false); // Menonaktifkan ikon peringatan jika sebelumnya aktif
    setExpanded(false); // Menutup navbar saat salah satu link diklik
  };
  

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded} fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-container" onClick={closeNavbar}>
            <img
              alt="Logo"
              src={Logo}
              width="35"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <div>
              <span>OSSAKA</span>
              <h6>OSIS SMK 1 Adiwerna</h6>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: 'auto', overflowX: 'auto', whiteSpace: 'nowrap' }}
              navbarScroll
              variant="underline"
            >
              <Nav.Link as={Link} to="/" className="nav-link-icon" onClick={handleHouseSelect}>
                {isHouseActive ? <HouseFill /> : <House />}
                
                <span>BERANDA</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/Berita" className="nav-link-icon" onClick={closeNavbar}>
                <Newspaper />
                <span>BERITA</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link-icon" onClick={handleWarningSelect}>
                {isWarningActive ? <ExclamationOctagonFill /> : <ExclamationOctagon />}
                <span>PERINGATAN</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/Kotak-Saran" className="nav-link-icon" onClick={handleBoxSelect}>
                {isBoxActive ? <BoxSeamFill /> : <BoxSeam />}
                <span>KOTAK SARAN</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/Tentang-Kami" className="nav-link-icon" onClick={closeNavbar}>
                <PersonVcard />
                <span>PENGURUS OSIS</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/Dokumentasi" className="nav-link-icon" onClick={closeNavbar}>
                <Images />
                <span>GALERI</span>
              </Nav.Link>
              <Nav.Link href="https://smkn1adw.sch.id/fp/" className="nav-link-icon" id="navbarScrollingDropdown" onClick={closeNavbar}>
                <Mortarboard />
                <span>PROFIL SEKOLAH KAMI</span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Pencarian"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Pencarian</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ paddingTop: '70px' }}> {/* Tambahkan padding untuk mencegah elemen di bawah navbar */}
        {/* Isi konten halaman Anda di sini */}
      </div>
    </div>
  );
}

export default Navbars;
