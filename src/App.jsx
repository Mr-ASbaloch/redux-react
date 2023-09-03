
import Product from './AddCart/Product'
import './App.css'

import Count from './Counter/Count'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch =useDispatch()

  return (
    <>
    {/* <div>
      <button onClick={(e)=> dispatch({type:'Increment'})}>Increment</button>
      <Count/>
      <button onClick={(e)=>dispatch({type:'decrement'})}>Decrement</button>
    </div> */}


    <Product/>
    </>
  )
}

export default App
