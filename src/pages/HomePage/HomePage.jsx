import React from "react";
import { Link } from "react-router-dom";
import ChandelierIMG from '../../images/chandelier.png'
import MasaIMG from '../../images/masa.jpg'
import CandelabruIMG from '../../images/candelabru.png'
import ScariIMG from '../../images/scari.jpg'
import AccesoriiIMG from '../../images/accesorii.jpg'
import "./HomePage.css";
import Button from "../../componetns/button-component/ButtonComponent";
import CozyCarousel from "../../componetns/carousell-component/CarousellComponent";
import Line from "../../componetns/line-splitter/LineSplitterComponent";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="title">
        <h1>Transylvania Forge</h1>
        <p className="subtitle">Handcrafted Iron & Wood Design</p>
      </div>

      <section className="hero">
        <div className="hero-content">

          <h2>Artă Funcțională din Fier Forjat și Lemn Masiv</h2>

          <p>
            Mobilier, scări și decorațiuni create manual pentru un stil
            rustic-industrial autentic
          </p>

          <div className="hero-buttons">
            <Link to="/shop">
              <Button children={"Vezi Magazinul"}/>
            </Link>

            <Link to="/price">
              <Button children={"Cere oferta"}/>
            </Link>
          </div>
        </div>
        <div className="chandelier-container">
          <img src={ChandelierIMG} class="chandelier-img" alt="Chandelier" />
        </div>

      </section>

      <Line
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          {/* Shield base */}
          <path d="M32 2 L58 12 V32 C58 52 32 62 32 62 S6 52 6 32 V12 L32 2 Z" 
                fill="url(##8B5E34)" stroke="#8b5e3c" strokeWidth="2"/>
          
          {/* Inner ornate pattern - central cross */}
          <path d="M32 10 L32 54 M12 32 L52 32" stroke="#8b5e3c" strokeWidth="1.5"/>
          
          {/* Rivets / ornamental dots */}
          <circle cx="32" cy="20" r="2" fill="#8b5e3c"/>
          <circle cx="32" cy="44" r="2" fill="#8b5e3c"/>
          <circle cx="20" cy="32" r="2" fill="#8b5e3c"/>
          <circle cx="44" cy="32" r="2" fill="#8b5e3c"/>
    
          {/* Fleur-de-lis motif in top section */}
          <path d="M32 12 C30 8, 36 8, 34 12 C36 16, 28 16, 32 12 Z" fill="#8b5e3c"/>
          
          {/* Gradient definition for metallic gold effect */}
          <defs>
            <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="64">
              <stop offset="0%" stopColor="#d4af37"/>
              <stop offset="50%" stopColor="#e6c75b"/>
              <stop offset="100%" stopColor="#b8860b"/>
            </linearGradient>
          </defs>
        </svg>
        }
      />

      {/* SERVICES */}
      <section className="services">
        <h2 className="gold-text">Ce Realizăm</h2>

        <div className="services-grid">
          <div className="service-card">
            <p>Mobilier din Fier și Lemn</p>
            <img src={MasaIMG} alt="" />
          </div>

          <div className="service-card">
            <p>Corpuri de Iluminat</p>
            <img src={CandelabruIMG} alt="" />
          </div>

          <div className="service-card">
            <p>Scări Interioare</p>
            <img src={ScariIMG} alt="" />
          </div>

          <div className="service-card">
            <p>Accesorii Decorative</p>
            <img src={AccesoriiIMG} alt="" />
          </div>
        </div>
      </section>
      <Line
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          {/* Shield base */}
          <path d="M32 2 L58 12 V32 C58 52 32 62 32 62 S6 52 6 32 V12 L32 2 Z" 
                fill="url(##8B5E34)" stroke="#8b5e3c" strokeWidth="2"/>
          
          {/* Inner ornate pattern - central cross */}
          <path d="M32 10 L32 54 M12 32 L52 32" stroke="#8b5e3c" strokeWidth="1.5"/>
          
          {/* Rivets / ornamental dots */}
          <circle cx="32" cy="20" r="2" fill="#8b5e3c"/>
          <circle cx="32" cy="44" r="2" fill="#8b5e3c"/>
          <circle cx="20" cy="32" r="2" fill="#8b5e3c"/>
          <circle cx="44" cy="32" r="2" fill="#8b5e3c"/>
    
          {/* Fleur-de-lis motif in top section */}
          <path d="M32 12 C30 8, 36 8, 34 12 C36 16, 28 16, 32 12 Z" fill="#8b5e3c"/>
          
          {/* Gradient definition for metallic gold effect */}
          <defs>
            <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="64">
              <stop offset="0%" stopColor="#d4af37"/>
              <stop offset="50%" stopColor="#e6c75b"/>
              <stop offset="100%" stopColor="#b8860b"/>
            </linearGradient>
          </defs>
        </svg>
        }
      />

      {/* RECENT PROJECTS */}
      <section className="projects">
        <h2 className="gold-text">Proiecte Recente</h2>

        <CozyCarousel/>
        <Link to={'/gallery'}>
          <Button children={"Vezi Mai Multe Proiecte"}/>
        </Link>
      </section>
      <Line
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          {/* Shield base */}
          <path d="M32 2 L58 12 V32 C58 52 32 62 32 62 S6 52 6 32 V12 L32 2 Z" 
                fill="url(##8B5E34)" stroke="#8b5e3c" strokeWidth="2"/>
          
          {/* Inner ornate pattern - central cross */}
          <path d="M32 10 L32 54 M12 32 L52 32" stroke="#8b5e3c" strokeWidth="1.5"/>
          
          {/* Rivets / ornamental dots */}
          <circle cx="32" cy="20" r="2" fill="#8b5e3c"/>
          <circle cx="32" cy="44" r="2" fill="#8b5e3c"/>
          <circle cx="20" cy="32" r="2" fill="#8b5e3c"/>
          <circle cx="44" cy="32" r="2" fill="#8b5e3c"/>
    
          {/* Fleur-de-lis motif in top section */}
          <path d="M32 12 C30 8, 36 8, 34 12 C36 16, 28 16, 32 12 Z" fill="#8b5e3c"/>
          
          {/* Gradient definition for metallic gold effect */}
          <defs>
            <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="64">
              <stop offset="0%" stopColor="#d4af37"/>
              <stop offset="50%" stopColor="#e6c75b"/>
              <stop offset="100%" stopColor="#b8860b"/>
            </linearGradient>
          </defs>
        </svg>
        }
      />

      {/* WHY US */}
      <section className="why">
        <h2 className="gold-text">De Ce Transylvania Forge ?</h2>

        <div className="why-grid">
          <div className="why-card">
            <span className="why-icon">✦</span>
            <h3>+250</h3>
            <p>Proiecte realizate</p>
          </div>

          <div className="why-card">
            <span className="why-icon">⚒</span>
            <h3>Design</h3>
            <p>Design Personalizat</p>
          </div>

          <div className="why-card">
            <span className="why-icon">✧</span>
            <h3>Premium</h3>
            <p>Finisaje Premium</p>
          </div>

          <div className="why-card">
            <span className="why-icon">🛠</span>
            <h3>Montaj</h3>
            <p>Montaj Profesional</p>
          </div>
        </div>
      </section>

      <Line
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          {/* Shield base */}
          <path d="M32 2 L58 12 V32 C58 52 32 62 32 62 S6 52 6 32 V12 L32 2 Z" 
                fill="url(##8B5E34)" stroke="#8b5e3c" strokeWidth="2"/>
          
          {/* Inner ornate pattern - central cross */}
          <path d="M32 10 L32 54 M12 32 L52 32" stroke="#8b5e3c" strokeWidth="1.5"/>
          
          {/* Rivets / ornamental dots */}
          <circle cx="32" cy="20" r="2" fill="#8b5e3c"/>
          <circle cx="32" cy="44" r="2" fill="#8b5e3c"/>
          <circle cx="20" cy="32" r="2" fill="#8b5e3c"/>
          <circle cx="44" cy="32" r="2" fill="#8b5e3c"/>
    
          {/* Fleur-de-lis motif in top section */}
          <path d="M32 12 C30 8, 36 8, 34 12 C36 16, 28 16, 32 12 Z" fill="#8b5e3c"/>
          
          {/* Gradient definition for metallic gold effect */}
          <defs>
            <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="64">
              <stop offset="0%" stopColor="#d4af37"/>
              <stop offset="50%" stopColor="#e6c75b"/>
              <stop offset="100%" stopColor="#b8860b"/>
            </linearGradient>
          </defs>
        </svg>
        }
      />

      {/* CONTACT FORM */}
      <section className="contact">
        <h2 className="gold-text">Solicită ofertă personalizată</h2>

        <form className="contact-form">
          <input type="text" placeholder="Nume" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Telefon" />
          <textarea placeholder="Mesaj"></textarea>

          <Button children={"Trimite"}>Trimite</Button>
        </form>
      </section>

    </div>
  );
};

export default Home;