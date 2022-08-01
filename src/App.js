import './App.css';
import Boton from './compometes/Boton.js';
import Contador from './compometes/Contador.js';
import logo from './img/pngegg.png';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] =  useState(0);

  const manejarClic = () => {
      setNumClics(numClics+100000000);
  }
  const reiniciarClic = () => {
    setNumClics(0);
  }


  return (
    <div className="App">
      <div className='logo-feedend-contenedor'>
          <img
            className='logo-feenend'
            src={logo}
            alt='Logo feenend'
            />
        </div>
      <div className='contenedor-principal'>
        
        <Contador 
        numClics={numClics}
        />
        <Boton 
        texto='Clic'
        esBotonClic={true}
        manejarClic={manejarClic}
        />
        <Boton 
        texto='Reiniciar'
        esBotonClic={false}
        manejarClic={reiniciarClic}
        />
      </div>
    </div>
  );
}

export default App;
