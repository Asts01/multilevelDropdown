import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      {/* <h1>MultiLevel-Navigation && React-Routers</h1> */}
      <HeaderComponent/>
      {/* <Home/> */}
      <Outlet/>
    </>
  )
}

export default App
