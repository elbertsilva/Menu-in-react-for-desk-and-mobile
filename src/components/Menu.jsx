import'./Menu.css'
import React from 'react'




    export default function Main (){
        return(
          
            <header class="cabeçalho">
      <div class="logo">
        <a href="#inicio">
          <img src="logo192.png" alt="Logo" />
        </a>
        </div>
        <button class="menu-toggle">
          <i class="fa fa-lg fa-bars"></i>
        </button>
          <nav class="menu">
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
        <aside class="autenticacao">
          <a href="#login">Login</a>
          <a href="#registrar" class="botao destaque">Registrar</a>
        </aside>

    </header>
        
        )
    }
        
    