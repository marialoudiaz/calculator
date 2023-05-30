import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  // le resultat
  // la ou on envoie le resultat des operateurs
  const [result, setResult]=useState([]) //[] 
  
  const updateArray = (value) => {setResult([...result, value]);};

  // fonction reset
  const reset=()=>{setResult([])}  

  //fonction qui calcule
  const calculate =()=>{
    let answer = [...result]
    let resultValue = eval(answer.join(''))
    setResult([resultValue.toFixed(4)]) // reajoute le resultat dans une array pour continuer calcul
  
  }

 
  return (
    <div className="Background">
          <div className='Display'>
            <div className='Screen'>
              <div className='Result'>{result}</div>
            </div>
              <div className='Buttons'>
              <div className='rowMain'>
              <div className='row'>
                <button onClick={reset}>AC</button>
              </div>
              <div className='row'>
                  <button onClick={()=>updateArray(7)}>7</button>
                  <button onClick={()=>updateArray(8)}>8</button>
                  <button onClick={()=>updateArray(9)}>9</button>
              </div>
              <div className='row'>
                <button onClick={()=>updateArray(4)}>4</button>
                <button onClick={()=>updateArray(5)}>5</button>
                <button onClick={()=>updateArray(6)}>6</button>
              </div>
              <div className='row'>
                <button onClick={()=>updateArray(1)}>1</button> 
                <button onClick={()=>updateArray(2)}>2</button>
                <button onClick={()=>updateArray(3)}>3</button>
              </div>
              <div className='row'>
                <button onClick={()=>updateArray(0)}>0</button>
                <button onClick={()=>updateArray('.')}>.</button>
                <button onClick={()=>calculate()}>=</button>
              </div>
              </div>
              <div className='col'>
                  <button className='operator' onClick={()=>updateArray('/')}>/</button>
                  <button className='operator' onClick={()=>updateArray('*')}>*</button>
                  <button className='operator' onClick={()=>updateArray('-')}>-</button>
                  <button className='operator' onClick={()=>updateArray('+')}>+</button>
              </div>
        </div>
        </div>
      </div>
  );
}

export default App;
