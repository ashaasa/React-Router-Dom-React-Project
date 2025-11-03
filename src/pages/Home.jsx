import React from "react";

function Home() {
  return (
    <div>
      {/* Judul halaman */}
      <h2 style={{ color: "#4fc3f7", marginBottom: "15px" }}>
        Welcome to Beomgyu’s World
      </h2>

      {/* Paragraf pembuka */}
      <p style={{ color: "#dbe8f5", lineHeight: "1.7" }}>
        Halo, MOA! 🌙  
        Selamat datang di website fan yang didedikasikan untuk{" "}
        <b>Choi Beomgyu</b> — salah satu anggota berbakat dari{" "}
        <b>TOMORROW X TOGETHER (TXT)</b>.  
        Di sini kamu bisa mengenal lebih dekat sosok Beomgyu, perjalanan
        kariernya, serta hal-hal menarik tentang dirinya!
      </p>

      {/* Penutup */}
      <p style={{ color: "#9fc7e6", marginTop: "20px" }}>
        Yuk jelajahi setiap halamannya dan temukan pesona Beomgyu yang
        nggak ada habisnya 💙
      </p>
    </div>
  );
}

export default Home;