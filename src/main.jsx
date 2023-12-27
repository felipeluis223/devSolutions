import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import TemplateHome from './templates/home'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter([
  {
   path: "/",
   element: <TemplateHome />
  },
  {
   path: "/about",
   element: <h1>About DevSolutions</h1>
  },
  {
   path: "/contacts",
   element: <h1>How to contact</h1>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
