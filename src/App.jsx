import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'

function App() {
  //using router here to route pages
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard></Dashboard>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
    </Route>  
    ))

  return (
    <div className="App">

     <RouterProvider router={router}></RouterProvider>
     </div>
  )
}

export default App
