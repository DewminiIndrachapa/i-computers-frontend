import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCard name = "Laptop" price = "500,000" image = "https://picsum.photos/id/0/200/303"/>
    <ProductCard name = "Phone" price = "5,000" image = "https://picsum.photos/id/1/200/303"/>
    <ProductCard name = "Watch" price = "3,000" image = "https://picsum.photos/id/2/200/303"/>
    </>
  )
}

export default App
