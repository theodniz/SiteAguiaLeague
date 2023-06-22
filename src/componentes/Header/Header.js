import React from "react";
import {Link} from 'react-router-dom'
import './header.css';
import logo from './logo.png';

function Header () {
    return (
 
            <header>

                <nav className="nav-bar">

                <div className="logo"><img src={logo} alt="logo" ></img></div>

                <div className="nav-list">

                    <ul>
                        <li className="nav-item"><a className="nav-link"><Link to = '/'>Inicio</Link></a></li>
                        <li className="nav-item"><a className="nav-link"><Link to = '/login'>Login</Link></a></li>
                        <li className="nav-item"><a className="nav-link"><Link to = '/sobre'>Sobre</Link></a></li>
                        <li className="nav-item"><a className="nav-link"><Link to = '/torneio'>Torneio</Link></a></li>
                        <li className="nav-item"><a className="nav-link"><Link to = '/jogos'>Jogos</Link></a></li>
                        <li className="nav-item"><a className="nav-link"><Link to = '/premios'>Prêmios</Link></a></li>
                    </ul>

                </div>

                </nav>

            </header>


    )
}

export default Header;
