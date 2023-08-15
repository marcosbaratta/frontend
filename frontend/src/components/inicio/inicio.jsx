import './inicio.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom'


function Inicio ()  {
    const navigate = useNavigate();
    const goToLogin = () => {
      navigate("/login");
    };
    const goToRegister = () => {
      navigate("/register");
    };
    return (
        <div className='containerInicio'>
        <h1>LOGO</h1>
        <button onClick={goToRegister}>REGISTRARME</button>
        <button onClick={goToLogin}>LOGUEARME</button>
        </div>
    )

    
}
export default Inicio
