import './Login.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Login(){
    const navigate = useNavigate();
    const goToHome = () => {
      navigate("/home");
    };
    return(
        <div className="loginContainer">
            <div className="loginHeader">
                <button>flechita</button>
                <h2>Ingresa a tu cuenta</h2>
            </div>
            <form>
                <div className="inputs">
                    <label htmlFor="name">Cuál es tu nombre de usuario?</label>
                    <input type="text" name='text' className='inputField' />
                    <span>mensaje de error</span>
                </div>
                <div className="inputs">
                    <label htmlFor="password">Cuál es tu password?</label>
                    <input type="text" name='password' className='inputField' />
                    <span>mensaje de error</span>
                </div>
                <button onClick={goToHome} type='submit' className='button'>INICIAR SESION</button>
            </form>
            </div>)}

export default Login