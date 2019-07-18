import React from 'react';
import './App.css';

//import Task from './components/task';
import Item from './components/item';

function App() {
  return (
    <div>
      <h1>Esto es: </h1>
      <Item parametro="elemento 1" title="titulo del elemento 1" />
      <Item parametro="elemento 2"/>
    </div>
  );
}

export default App;
/*
function Mensaje(props) {
  console.log(props)
  return (
    <div id="mensaje">
      <h1>
        {props.title}
      </h1>
      {props.parametro}
    </div>
  )
}
Cuando usamos la funcion flecha retornamos algo sin especificar (sin return)
lo guardamos en una const xq la definicion de la function arranca desde ()
const App2 = () => <div>xxxx</div> 
() => alert('hola mundo')

cuando definimos un nuevo comportamiento dentro de una clase necesitamos usar bind,
para evitar eso resscribimos el comportamiento utilizando la funcion flecha
*/