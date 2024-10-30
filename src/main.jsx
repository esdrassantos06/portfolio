import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './components/Layout'; // Importe o Layout

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use o Layout como elemento pai
    children: [
      {
        index: true, // Rota padrão
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
