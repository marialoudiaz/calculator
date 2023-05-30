import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  //les touche
  let opsArray = ['/','*','-','+']
  let numArray=[7,8,9,4,5,6,1,2,3,0,'.']
  // le resultat
  const [result, setResult]=useState([]) //[] 
  const updateArray = (value) => {setResult([...result, value]);};

  // fonction reset
  const reset=()=>{setResult([])}  

  //fonction qui calcule
  const calculate =()=>{
    let answer = [...result]
    let resultValue = eval(answer.join(''))
    setResult([resultValue.toFixed(2)]) // reajoute le resultat dans une array pour continuer calcul
  }

  //Render dynamically buttons
  const renderNumButtons =()=>{
    return numArray.map((num)=>(
      <button key={num} onClick={()=> updateArray(num)}>{num}</button>
    ));
  };
  const renderOpsButtons =()=>{
    return opsArray.map((op)=>(
      <button key={op} className='operator' onClick={()=> updateArray(op)}>{op}</button>
    ));
  };
 
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
              <div className='row'>{renderNumButtons()}</div>
                <div className='row'>
                  <button onClick={()=>calculate()}>=</button>
                </div>
              </div>
              <div className='col'>{renderOpsButtons()}</div>
              </div>
      </div>
    </div>
  );
}

export default App;
