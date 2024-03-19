import React from "react";
import errorimg from "../Pages/img/Unitled.png";
import "./styles/Berita.css";

function Berita() {

  
  return (
      <div class="band">
  <div class="item-1">
    <a href="" class="card">
    <div className="thumb" style={{backgroundImage: `url(${errorimg})`}}></div>
      <article>
        <h1 className="judul">Berita 1</h1>
        <span className="nama">Person 1</span>
      </article>
    </a>
  </div>
  <div class="item-2">
    <a href="" class="card">
    <div className="thumb" style={{backgroundImage: `url(${errorimg})`}}></div>
      <article>
        <h1 className="judul">Berita 2</h1>
        <span className="nama">Person 2</span>
      </article>
    </a>
  </div>
  <div class="item-3">
    <a href="" class="card">
    <div className="thumb" style={{backgroundImage: `url(${errorimg})`}}></div>
      <article>
        <h1 className="judul">Berita 3</h1>
        <p>Deskripsi Paragraf </p>
        <span className="nama">Person 3</span>
      </article>
    </a>
  </div>
  <div class="item-4">
    <a href="" class="card">
    <div className="thumb" style={{backgroundImage: `url(${errorimg})`}}></div>
      <article>
        <h1 className="judul">Berita 4</h1>
        <p>Deskripsi Paragraf</p>
        <span className="nama">Person 4</span>
      </article>
    </a>
  </div>
  <div class="item-5">
    <a href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139" class="card">
    <div className="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}></div>
      <article>
        <h1 className="judul">How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
        <span className="nama">Rose</span>
      </article>
    </a>
  </div>
  <div class="item-6">
    <a href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338" class="card">
    <div className="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}></div>
      <article>
        <h1 className="judul">5 Inspirational Business Portraits and How to Make Your Own</h1>
        <span className="nama">Marie Gardiner</span>
      </article>
    </a>
  </div>
  <div class="item-7">
    <a href="https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281" class="card">
    <div className="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}></div>
      <article>
        <h1 className="judul">Notes From Behind the Firewall: The State of Web Design in China</h1>
        <span className="nama">Kendra Schaefer</span>
      </article>
    </a>
  </div>
</div>
  );
}

export default Berita;
