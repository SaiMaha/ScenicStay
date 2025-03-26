import React from 'react'

import { RouterProvider } from 'react-router-dom'

import NavBar from './Components/NavbarContainer/NavBar';
import myRoutes from './Components/router/Routes';

const App = () => {
  return (
    <div>
      <RouterProvider router={myRoutes}>
        <NavBar/>
      </RouterProvider>
    </div>
  )
}

export default App