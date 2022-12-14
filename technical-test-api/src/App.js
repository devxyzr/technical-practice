import { useState, useEffect } from 'react';
import { getData } from './functions';

function App() {
  // Setea estados que vienen desde info{} de la api para poder manipular los datos.

  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [pages, setPages] = useState(null);
  const [total, setTotal] = useState(null);
  const [persons, setPersons] = useState(null);

  useEffect(() => {
    getData(); /* Traemos la data, desde la api, se importa la funcion arriba*/
  }, []);

  return <div></div>;
}

export default App;
