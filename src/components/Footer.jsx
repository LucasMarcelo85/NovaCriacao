import React from 'react';
import './Footer.css';
import logo from '../assets/NCbanner.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Igreja Nova Criação" className="footer-logo" />
      <ul className="footer-menu">
        <li><a href="#sobre">Sobre a Igreja</a></li>
        <li><a href="#faca-sua-parte">Faça Sua Parte</a></li>
        <li><a href="#eventos">Eventos</a></li>
        <li><a href="#cultos">Cultos</a></li>
        <li><a href="#gc">Encontre um GC</a></li>
      </ul>
      <p>Desenvolvido por <a href="#">@Dev.Marcelo</a></p>
    </footer>
  );
};
