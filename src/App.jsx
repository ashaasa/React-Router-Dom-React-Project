import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    // BrowserRouter digunakan untuk mengatur navigasi antar halaman
    <BrowserRouter>

      {/* Container utama untuk seluruh isi halaman */}
      <div
        style={{
          display: "flex",
          flexDirection: "column", // posisi vertikal
          alignItems: "center", // isi rata tengah
          minHeight: "100vh", // tinggi penuh layar
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "#0e1b2b", // warna dasar biru tua
          color: "#fff", // teks putih
          padding: "40px 20px",
        }}
      >

        {/* Navigation Bar */}
        <nav
          style={{
            backgroundColor: "#13294b", // warna navbar
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)", // bayangan 
            borderRadius: "12px", // sudut melengkung
            padding: "15px 30px",
            marginBottom: "40px",
          }}
        >
          {/* Link navigasi ke halaman Home */}
          <Link
            to="/"
            style={{
              marginRight: "25px",
              textDecoration: "none", // menghapus garis bawah link
              color: "#fff",
              fontWeight: "500",
              transition: "0.3s", // efek animasi hover
            }}
            onMouseOver={(e) => (e.target.style.color = "#4fc3f7")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            Home
          </Link>

          {/* Link navigasi ke halaman About */}
          <Link
            to="/about"
            style={{
              marginRight: "25px",
              textDecoration: "none",
              color: "#fff",
              fontWeight: "500",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#4fc3f7")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            About
          </Link>

          {/* Link navigasi ke halaman Contact */}
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "500",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#4fc3f7")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            Contact
          </Link>
        </nav>

        {/* Container utama untuk menampilkan isi halaman yang sedang dibuka */}
        <div
          style={{
            backgroundColor: "#13294b",
            borderRadius: "12px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            padding: "40px 30px",
            width: "100%",
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          {/* Bagian ini untuk nentuin halaman mana yang tampil sesuai URL */}
          <Routes>
            {/* "/" = halaman Home */}
            <Route path="/" element={<Home />} />

            {/* "/about" = halaman About */}
            <Route path="/about" element={<About />} />

            {/* "/contact" = halaman Contact */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
