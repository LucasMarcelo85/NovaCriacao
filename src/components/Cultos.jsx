import React from 'react';
import './Cultos.css';
import quintas from '../assets/quintas.jpeg';
import uno from '../assets/sabado.jpeg';
import domingo from '../assets/domingo.jpeg';

export const Cultos = () => {
  return (
    <section id="cultos" className="cultos-section">
      <h2>Horários dos Cultos</h2>
      <img src={quintas} alt="Culto de Quintas" className="culto-image" />
      <img src={uno} alt="Culto de Sábado" className="culto-image" />
      <img src={domingo} alt="Culto de Domingo" className="culto-image" />
    </section>
  );
};
