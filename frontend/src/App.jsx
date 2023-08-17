import './App.css';
import Contextual from './components/Contextual/Contextual';
import Inicio from './components/inicio/inicio';
import Register from './components/Registro/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Playlist from './components/Playlist/Playlist';

function App() {
  const rutas= createBrowserRouter ([
  {path: '/', element: <Inicio/>},
  {path: '/home', element: <Home/>},
  {path: '/login', element: <Login/>},
  {path: '/register', element: <Register/>}, 
  {path: '/contextual', element: <Contextual/>},
  {path: '/playlist', element: <Playlist/>},
 ])


  return (
    <RouterProvider router = {rutas} />
  )
}

export default App
