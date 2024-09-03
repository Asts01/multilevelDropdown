import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ba from './components/BA/Ba.jsx'
import Backend from './components/Backend/Backend.jsx'
import Frontend from './components/Frontend/Frontend.jsx'
import Home from './components/Home/Home.jsx'
import Java from './components/Java/Java.jsx'
import JavaScript from './components/JavaScript/JavaScript.jsx'
import InternalTutorials from './components/InternalTutorials/InternalTutorials.jsx'
import ServicesOffered from './components/ServicesOffered/ServicesOffered.jsx'

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
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
