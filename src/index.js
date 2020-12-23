import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Saludos from './App'
import Example from './App'

import useWindowDimensions from './App'

import {isMobile} from 'react-device-detect'
import {isChrome} from 'react-device-detect'





const RenderContent = () => {
  if(isMobile) {
    return (<div>Hola mobil</div>);
  }
  if(isChrome) {
    return (<div>hola chrome</div>
    
      );
  }

  return (<div>........... contenido </div>);

}


const internalIp = require('internal-ip');


(async () => {
  
  console.log(await internalIp.v4());
  //=> '10.0.0.79'
})();



 

const element3 = <Saludos namae = "aaaa"/>

const element2 = <App/>



const Componenteresol = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height} 
    </div>
  );
}


ReactDOM.render(

  <RenderContent/>,
  document.getElementById('root')

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

