import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import HomePage from './Components/Pages/HomePage';
import MenuPage from './Components/Pages/MenuPage/Menu/MenuPage';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path: '/menu',
        element: <MenuPage></MenuPage>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
  </React.StrictMode>,
)
