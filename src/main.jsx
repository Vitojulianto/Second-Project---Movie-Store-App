import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hero from './pages/hero.jsx'
import Movies from './pages/movies.jsx'
import Home from './pages/home.jsx'
import Cart from './pages/cart.jsx'
import LoginForm from './pages/login.jsx'
import RegisterForm from './pages/register.jsx'
import MovieDetails from './pages/moviesdetail.jsx'
import {CartProvider} from './contexts/CartContext.jsx'
import FormShipping from './pages/formshipping.jsx'
import SuccessOrder from './pages/successorder.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/register',
    element: <RegisterForm />,
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />,
  },
  {
    path: '/formshipping',
    element: <FormShipping />,
  },
  {
    path: '/successorder',
    element: <SuccessOrder />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={Router} />
    </CartProvider>
    
  </StrictMode>,
)
