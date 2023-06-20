import './componentes/header.css'
import logo from './img/logo.png'

function App() {
  return (
    <div className="App">
       <header>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
            <nav>
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Jogos</a></li>
                    <li><a>Torneios</a></li>
                    <li><a>Premios</a></li>
                </ul>
            </nav>

        </header>
    
    </div>
  );
}

export default App;
