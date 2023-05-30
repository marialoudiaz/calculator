import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  // le resultat
  // la ou on envoie le resultat des operateurs
  const [result, setResult]=useState(1200) //[]

  // fonction reset
  const reset=()=>{setResult([])}  

  //fonction qui calcule
  const calculate =()=>{result = eval(result.join(''))}
  
  // chaque chiffre et opérateur est ajouté dans result (onClick) [...result, le truc ajouté]
  // calculate donne le resultat

  return (
    <div className="Background">
          <div className='Display'>
            <div className='Screen'>
              <div className='Result'>{result}</div>
            </div>
              <div className='Buttons'>
              <div className='rowMain'>
              <div className='row'>
                <button>AC</button>
              </div>
              <div className='row'>
                  <button>7</button>
                  <button>8</button>
                  <button>9</button>
              </div>
              <div className='row'>
                <button>4</button>
                <button>5</button>
                <button>6</button>
              </div>
              <div className='row'>
                <button>1</button> 
                <button>2</button>
                <button>3</button>
              </div>
              <div className='row'>
                <button>0</button>
                <button>.</button>
                <button>=</button>
              </div>
              </div>
              <div className='col'>
                  <button className='operator'>/</button>
                  <button className='operator'>*</button>
                  <button className='operator'>-</button>
                  <button className='operator'>+</button>
              </div>
        </div>
        </div>
      </div>
  );
}

export default App;
