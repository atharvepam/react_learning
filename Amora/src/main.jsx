import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import Body from "./components/Body.jsx"
import './index.css'
import App from './App.jsx'
import AppLayout from './components/AppLayout.jsx'
import {createBrowserRouter,RouterProvider} from "react-router";
const AppRouter = createBrowserRouter([{
  path:"/",
  element:< AppLayout />
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>,
)
