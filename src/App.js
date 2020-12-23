import logo from './logo.svg';
import './App.css';


import { useState, useEffect } from 'react';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}




function App() {
  return (
    <div className="App">

      <header className="App-header">
        
    


        <p>
          hola desde componente
          

        </p>
        
      </header>
    </div>
  );
}





function Example() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>ahora es {count}</p>
    </div>
  );
}


function Saludos(props) {
  return <h1>hola desde componente, {props.namae}</h1>;
}



