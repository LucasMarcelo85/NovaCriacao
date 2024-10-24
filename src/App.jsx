import React from 'react';
import { Header } from './components/Header';
import { Cultos } from './components/Cultos';
import { Footer } from './components/Footer';
import PastoralTeam from './components/PastoralTeam';  // Importação padrão sem chaves
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Cultos />
      <PastoralTeam />  {/* Uso do componente */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
