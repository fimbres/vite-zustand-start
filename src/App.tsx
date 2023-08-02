import { useCounterStore } from "./store/counterStore"

const App = () => {
  const { counter, decreaseCounter, increaseCounter } = useCounterStore();

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
      <div>
        {JSON.stringify()}
      </div>
    </div>
  )
}

export default App
