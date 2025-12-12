import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-[600px] h-[600px] border bg-gray-400'>
         <div className='w-[500px] h-[500px] border bg-yellow-200 flex  flex-col justify-center items-center'>
             <div className='w-[100px] h-[100px] border bg-blue-700'></div>
              <div className='w-[100px] h-[100px] border bg-green-700'></div>
              <div className='w-[100px] h-[100px] border bg-red-700 fixed left-[550px] top-[550px]'></div>
              <div className='w-[100px] h-[100px] border absolute left-[300px] bg-purple-700'></div>
         </div>


     </div>
    </>
  )
}

export default App
