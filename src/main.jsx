import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ba from './components/ServicesOffered/Ba/Ba.jsx'
import Backend from './components/ServicesOffered/Ba/Backend/Backend.jsx'
import Frontend from './components/ServicesOffered/Frontend/Frontend.jsx'
import Home from './components/Home/Home.jsx'
import JavaScript from './components/ServicesOffered/JavaScript/JavaScript.jsx'
import InternalTutorials from './components/ServicesOffered/InternalTutorials/InternalTutorials.jsx'
import ServicesOffered from './components/ServicesOffered/ServicesOffered.jsx'
import AP from './components/ServicesOffered/AP.jsx'
import P2P from './components/ServicesOffered/P2P.jsx'
import TAndE from './components/ServicesOffered/TAndE.jsx'
import QR from './components/ServicesOffered/QR.jsx'
import Advances from './components/ServicesOffered/Advances.jsx'
// import ReactFunc from './components/ServicesOffered/React/React.jsx'
import Java from './components/ServicesOffered/Java/Java.jsx'
import ReactFunc from './components/ServicesOffered/React/React.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"Dice",
        element:<Home/>
      },
      {
        path:"BA",
        element:<Ba/>
      },
      {
        path:"Backend",
        element:<Backend/>
      },
      {
        path:"FrontEnd",
        element:<Frontend/>
      },
      {
        path:"Home",
        element:<Home/>
      },
      {
        path:"Java",
        element:<Java/>
      },
      {
        path:"JavaScript",
        element:<JavaScript/>
      },
      {
        path:"InternTutorials",
        element:<InternalTutorials/>
      },
      {
        path:"ServicesOffered",
        element:<ServicesOffered/>
      },
      {
        path:"AP",
        element:<AP/>
      },
      {
        path:"P2P",
        element:<P2P/>
      },
      {
        path:"QR",
        element:<QR/>
      },
      {
        path:"T&E",
        element:<TAndE/>
      },
      {
        path:"Advances",
        element:<Advances/>
      },
      {
        path:"React",
        element:<ReactFunc/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
