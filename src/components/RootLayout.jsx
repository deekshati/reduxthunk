import React from 'react'
import NavBarPanel from './NavBarPanel'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
    <NavBarPanel />
    <main>
      <Outlet></Outlet>
    </main>

    </Provider>
    </>
  )
}

export default RootLayout