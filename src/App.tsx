import { useEffect } from "react";
import { useCounterStore } from "./store/counterStore"
import { useDataStore } from "./store/dataStore";

const App = () => {
  const { counter, decreaseCounter, increaseCounter } = useCounterStore();
  const { data, getData, clearData } = useDataStore();

  useEffect(() => {
    getData();

    return () => clearData();
  }, []);
  

  return (
    <div style={{
      width: 'screen',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
      }}>
        <button onClick={decreaseCounter}>-</button>
        <div style={{ marginRight: 20, marginLeft: 20 }}>Counter: {counter}</div>
        <button onClick={increaseCounter}>+</button>
      </div>
      <br/>
      <br/>
      <hr style={{color: 'white'}}/>
      {JSON.stringify(data)}
    </div>
  )
}

export default App
