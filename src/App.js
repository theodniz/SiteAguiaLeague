
import {Routes, Route, Link} from 'react-router-dom'
import React from "react";
import Header from './componentes/header/Header'
import Jogos from './componentes/header/jogos'
import Torneio from './componentes/header/torneios.js';
import Sobre from './componentes/header/sobre.js';
import Premios from './componentes/header/premios.js';
import Login from './componentes/Login/Login.jsx'




function App() {
  return (
    <div className="App">
      <Header />
      <head>
        <link rel="stylesheet" type="text/css" href="css/estilo.css"></link>
      </head>
      <header> 
      </header>

      <main>
        <Routes>
          <Route path='/inicio'/>
          <Route path='/Login' element={<Login/>}/>
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
