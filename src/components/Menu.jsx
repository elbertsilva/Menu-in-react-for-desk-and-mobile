import'./Menu.css'
import React from 'react'

    export default function Main (){
        return(
          
            <header className="cabeçalho">
      <div className="logo">
        <a href="#inicio">
          <img src="conforce.jpg" alt="Logo" />
        </a>
        </div>
        <button className="menu-toggle">
          <i className="fa fa-lg fa-bars"></i>
        </button>
          <nav className="menu">
            <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#Cursos">Cursos</a>
            </li>
            <li>
              <a href="#Sobre">Sobre</a>
            </li>
            <li>
              <a href="#Contato">Contato</a>
            </li>
          </ul>
        </nav>
        <aside className="autenticacao">
          <a href="#login">Login</a>
          <a href="#registrar" class="botao destaque">Registrar</a>
        </aside>

    </header>
        
        )
    }
        
    