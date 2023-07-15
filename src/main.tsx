import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import type { Router as RemixRouter } from "@remix-run/router";

import { MainRoute } from '@/Pages/MainPage/route';
// import Routes from './routes';

import '@/globalStyle.css'

const coreRoutes: RouteObject[] = ([
  {
    path: '/',
    element: <div>Login Page</div>,
    errorElement: <div>Página não encontrado</div>
  },
])

const router: RemixRouter = createBrowserRouter([...coreRoutes, ...MainRoute])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router ={ router } />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <RouterProvider router ={ Routes } />
//   </React.StrictMode>
// );
