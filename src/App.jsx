import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Routeador from './routes'
import Cabecario from './components/Cabecario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routeador />
    </>
  )
}

export default App
