import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HireForm from './Pages/HireForm.tsx';
import NotFound from './Pages/NotFound.tsx';
import About from './Pages/About.tsx';
import Contact from './Pages/ContactUs.tsx';
const router = createBrowserRouter([
  { path: '/app', element: <App /> },
  { path: '/home', element: <App /> },
  { path: '/', element: <App /> },
  { path: '/hire', element: <HireForm /> },
  { path: '*', element: <NotFound /> },
  { path: 'about', element: <About /> },
  { path: 'contact', element: <Contact /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
