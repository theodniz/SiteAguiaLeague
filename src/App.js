import './componentes/header.css'
import logo from './img/logo.png'
import Inscricao from './paginas/inscricao/inscricao.js';

function App() {
  return (
    <div className="App container">
       <header>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
            <nav className='navbar'>
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Jogos</a></li>
                    <li><a>Torneios</a></li>
                    <li><a>Premios</a></li>
                </ul>
            </nav>

        </header>
        <main>
        </main>
    </div>
  );
}

export default App;
