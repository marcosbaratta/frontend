import './App.css';
import Contextual from './components/Contextual';
import Inicio from './components/inicio/inicio';
import Register from './components/Registro/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const rutas= createBrowserRouter ([
  {path: '/inicio', element: <Inicio/>},
  {path: '/home', element: <Home/>},
  {path: '/login', element: <Login/>},
  {path: '/register', element: <Register/>}, 
  {path: '/contextual', element: <Contextual/>},
 ])


  return (
    <RouterProvider router = {rutas} />
  )
}

export default App
