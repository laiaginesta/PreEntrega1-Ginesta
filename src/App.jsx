import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a nuestra tienda"} />
    </div>
  )
}

export default App
