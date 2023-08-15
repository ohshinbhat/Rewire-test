import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Blog from './routes/Blog'
import Contact from './routes/Contact'
import './App.css'

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />

      },
      {
        path: '/blogs',
        element: <Blog />

      }
    ]
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App