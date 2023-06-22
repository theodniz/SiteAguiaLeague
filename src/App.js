
import {Routes, Route, Link} from 'react-router-dom'
import React from "react";
import Header from './componentes/header/Header';
import Jogos from './componentes/header/jogos.js';
import Torneio from './componentes/header/torneios.js';
import Sobre from './componentes/header/sobre.js';
import Premios from './componentes/header/premios.js';
import './componentes/header/header.css'

import BootstrapCSS from './bootstrap/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Header />
      <head>
        <link href={BootstrapCSS} rel="styleshet"></link>
        <link rel="stylesheet" type="text/css" href="css/estilo.css"></link>
      </head>
      <header> 
      </header>

      <main>
        <Routes>
          <Route path='/inicio'/>
          <Route path='/Sobre' element={<Sobre/>}/>
          <Route path='/Torneio' element={<Torneio/>}/>
          <Route path='/Jogos' element={<Jogos/>}/>
          <Route path='/Premios' element={<Premios/>}/>
        </Routes>
        
      </main>

    </div>
  );
}

export default App;
