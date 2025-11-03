import React from "react";

function Contact() {
  return (
    <div>
      {/* Judul halaman */}
      <h2 style={{ color: "#4fc3f7", marginBottom: "15px" }}>
        Kontak dan Media Sosial
      </h2>

      {/* Paragraf utama */}
      <p style={{ color: "#dbe8f5", lineHeight: "1.7" }}>
        Untuk kamu yang ingin selalu update dengan aktivitas Beomgyu dan TXT,
        kamu bisa mengikuti akun resmi berikut:
      </p>

      {/* Daftar sosial media */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
          color: "#9fc7e6",
          lineHeight: "1.8",
        }}
      >
        <li>
          💙 <b>Instagram Pribadi:</b>{" "}
          <a
            href="https://www.instagram.com/bamgyuuuu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            style={{ color: "#4fc3f7", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            @bamgyuuuu
          </a>
        </li>
        <li>
          🕊 <b>Instagram TXT:</b>{" "}
          <a
            href="https://www.instagram.com/txt_bighit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            style={{ color: "#4fc3f7", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            @txt_bighit
          </a>
        </li>
        <li>
          🎥 <b>YouTube:</b>{" "}
          <a
            href="https://www.youtube.com/channel/UCtiObj3CsEAdNU6ZPWDsddQ"
            style={{ color: "#4fc3f7", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            TOMORROW X TOGETHER OFFICIAL
          </a>
        </li>
      </ul>

      {/* Pesan penutup */}
      <p style={{ color: "#9fc7e6", marginTop: "25px" }}>
        Terima kasih sudah mendukung Beomgyu dan TXT!  
        Tetap semangat dan terus sebarkan energi positif mereka ke seluruh dunia 🌍💙
      </p>
    </div>
  );
}

export default Contact;
