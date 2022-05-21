import { useState, useEffect } from 'react'

function App() {

  const [ counter, setCounter ] = useState(10);
  
  useEffect(() => {

    setTimeout(() => {
      setCounter(counter - 1);

      if(counter === 0){
        setCounter(10);
      }
      
    }, 1000);

  });

  return (
    <div className="App">
      <h1>Counter Down: {counter}</h1>
    </div>
  );
}

export default App;
