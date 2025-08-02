import React from 'react'

import { RouterProvider } from 'react-router-dom'

import NavBar from './Components/NavbarContainer/NavBar';
import myRoutes from './Components/router/Routes';
import ContextApi from './Components/Context/Contextapi';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div>
      <ContextApi>
      <RouterProvider router={myRoutes}/>
      </ContextApi>
      <Toaster/>
 
      
    </div>
  )
}

export default App