import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Pages/img/Logo.png';
import { Link } from "react-router-dom";
import './Navbar.css'; 
import { HouseFill, Newspaper, Camera, Mortarboard, PersonVcard, Box , Search} from "react-bootstrap-icons";

function Navbars() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

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
              <Nav.Link as={Link} to="/" className="nav-link-icon" onClick={closeNavbar}>
                <HouseFill />
                <span>BERANDA</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/Berita" className="nav-link-icon" onClick={closeNavbar}>
                <Newspaper />
                <span>BERITA</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/Kotak-Saran" className="nav-link-icon" onClick={closeNavbar}>
                <Box />
                <span>KOTAK SARAN</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/Tentang-Kami" className="nav-link-icon" onClick={closeNavbar}>
                <PersonVcard />
                <span>TIM KAMI</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/Dokumentasi" className="nav-link-icon" onClick={closeNavbar}>
                <Camera />
                <span>ARSIP DOKUMENTASI</span>
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
