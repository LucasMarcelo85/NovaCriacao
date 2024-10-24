import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/NCicon.png';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar o menu se clicar fora dele, exceto quando clicar no botão hambúrguer
  useEffect(() => {
    const closeMenuOnClickOutside = (event) => {
      if (!event.target.closest('nav') && !event.target.closest('.hamburger') && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('click', closeMenuOnClickOutside);
    return () => window.removeEventListener('click', closeMenuOnClickOutside);
  }, [menuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Igreja Nova Criação" className="logo" />
        <h1>Igreja Nova Criação</h1>
      </div>
      <nav>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#sobre">Sobre a Igreja</a></li>
          <li><a href="#cultos">Faça sua parte</a></li>
          <li><a href="#eventos">Eventos</a></li>
          <li><a href="#cultos">Cultos</a></li>
          <li><a href="#gc">Encontre um GC</a></li>
        </ul>
      </nav>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};
