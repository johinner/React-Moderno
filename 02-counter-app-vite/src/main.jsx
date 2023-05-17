import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles.css"
import {App} from "./App"
import { CounterApp } from './CounterApp'
import { getHeroeByIdAsync } from './base-pruebas/09-promesas'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App title = "Pruebas unitarias en React"/> */}
    <CounterApp value = {27}/>
  </React.StrictMode>
)

 