import React from 'react'

import {Link} from 'react-router-dom'
export  default function Home(){
  return  <div>
          <ul>
              <h1>Projects</h1>
              <li>
              <Link to="/Car">Car-fleet</Link>
                </li>
                  <li>
              <Link to="/Todos">Todos</Link>
                </li>
                <li>
                 <Link to="/FormsComponent">Forms Components</Link>
                </li>
                <li>
                <Link to="/Countries">Countries</Link>
                </li>
                <li>
                <Link to="/EmojiGame">Emoji's Game</Link>
                </li>
          </ul>
    
    </div>
    
    
}