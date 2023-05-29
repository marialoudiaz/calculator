import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  // le resultat
  // la ou on envoie le resultat des operateurs
  const [result, setResult]=useState([])

  // fonction reset
  const reset=()=>{setResult([])}  

  //fonction qui calcule
  const calculate =()=>{result = eval(result.join(''))}
  
  // chaque chiffre et opérateur est ajouté dans result (onClick) [...result, le truc ajouté]
  // calculate donne le resultat

  return (
    <div className="Background">
      <div className='Screen'>
         <div className='Result'>{result}</div>
          <div className='Buttons'>
            <button>AC</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
            <button>/</button>
            <button>*</button>
            <button>-</button>
            <button>+</button>
          </div> 
      </div>
     
    </div>
  );
}

export default App;
