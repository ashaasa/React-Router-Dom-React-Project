import React from "react";

function About() {
  return (
    <div>
      {/* Judul halaman */}
      <h2 style={{ color: "#4fc3f7", marginBottom: "15px" }}>
        Tentang Beomgyu
      </h2>

      {/* biodata singkat */}
      <p
        style={{
          color: "#dbe8f5",
          lineHeight: "1.7",
          marginBottom: "15px",
        }}
      >
        <b>Choi Beomgyu</b> lahir pada <b>13 Maret 2001</b> di Daegu, Korea
        Selatan. Ia merupakan salah satu anggota dari grup{" "}
        <b>TOMORROW X TOGETHER (TXT)</b> di bawah naungan BigHit Music.
        Beomgyu dikenal sebagai sosok yang multitalenta, ia bisa bernyanyi,
        menari, memainkan gitar, dan bahkan menulis lagu.
      </p>

      {/* Kepribadian dan fun facts */}
      <p style={{ color: "#9fc7e6", lineHeight: "1.7" }}>
        Dikenal dengan kepribadiannya yang <b>ceria</b> dan <b>hangat</b>,
        Beomgyu sering membuat suasana grup menjadi hidup.  
        Ia juga sangat dekat dengan para member TXT lainnya, terutama dengan
        Taehyun.  
        Fakta unik: Beomgyu adalah penggemar berat musik rock dan sering
        mendengarkan lagu-lagu band klasik seperti Coldplay dan Oasis 🎸
      </p>
    </div>
  );
}

export default About;
