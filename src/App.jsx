import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './store'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const addValue = () => {
    dispatch(counterActions.addValue(10))
  }

  return (
    <>
      <h1>React-Redux Counter App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addValue}>Add Value</button>
    </>
  )
}

export default App
