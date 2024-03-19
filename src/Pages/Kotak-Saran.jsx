import React, { useState } from "react";
import "./styles/Saran.css";

function Kotak_Saran() {
  const [saran, setSaran] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filterKataKasar = (teks) => {
    const kataKasar = [
      "anjing", "bangsat", "kontol", "memek", "bajingan", "yatim",
      "jancok", "jancuk", "ndhasmu", "raimu", "picek", "budeg",
      "budheg", "gendheng", "goblog", "asu", "cangkeme", "matane",
      "matamu", "bodoh", "noob" , "bokep"
    ]; // Daftar kata-kata kasar
    for (let i = 0; i < kataKasar.length; i++) {
      const kata = kataKasar[i];
      const regex = new RegExp("\\b" + kata + "\\w*\\b", "gi"); // Mencocokkan kata dengan karakter tambahan di belakangnya opsional
      if (regex.test(teks)) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (saran.trim() === "") {
      setError("Mohon isi kotak saran");
    } else if (filterKataKasar(saran)) {
      setError("Teks mengandung kata kasar");
    } else {
      const confirmSend = window.confirm("Apakah Anda yakin ingin mengirim saran?");
      if (confirmSend) {
        setIsSubmitting(true);
        try {
          const response = await fetch("http://localhost:5000/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ saran }),
          });
          if (response.ok) {
            setError("");
            setSaran("");
            setIsSubmitting(false);
            window.alert("Data berhasil terkirim!");
          } else {
            throw new Error("Gagal mengirim formulir.");
          }
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
          setError("Terjadi kesalahan, silakan coba lagi.");
          setIsSubmitting(false);
        }
      }
    }
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <div className="formbold-form-title">
          <h3>Kotak Saran</h3>
          <p>SARAN ANDA SANGAT BERARTI UNTUK KAMI</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formbold-textarea">
            <textarea
              rows="6"
              value={saran}
              onChange={(e) => setSaran(e.target.value)}
              placeholder="Ketik Disini Untuk Menyampaikan Saran Anda ..."
              className="formbold-form-input"
            ></textarea>
            <label htmlFor="message" className="formbold-form-label"></label>
            {error && <div className="error">{error}</div>}
          </div>

          <button type="submit" className="formbold-btn" disabled={isSubmitting}>
            {isSubmitting ? "Mengirim..." : "Kirim Saran"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Kotak_Saran;
