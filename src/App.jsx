import './App.css';
import PropTypes from 'prop-types'
import { useState } from 'react';



function App({nombre, saludo}) {
  const [value, setValue] = useState(saludo)

 const handleIncrease = (event) =>{
    setValue(value + 1);
  } 
  const handleDecrease = (event) =>{
    setValue(value - 1);
  }
  
  const handleReset = (event) =>{
    setValue(saludo);
  }

  return (
    <div className="App">
      <h1>{nombre}</h1>
      <p>{saludo}</p>
      <div className="App">
        <p>{value}</p>
        <button 
          onClick={(event) => handleIncrease(event)} //forma 1 
        > +1 </button>
        <button
          onClick={handleDecrease} // forma 2
        > -1 </button>
        <button 
          onClick={() => handleReset()} // forma 3
        > reset </button>
      </div>
    </div>
  );
}
App.propTypes = {
  nombre: PropTypes.string.isRequired,
  saludo: PropTypes.number,
}

App.defaultProps = {
  nombre : "pepe",
}

export default App;

