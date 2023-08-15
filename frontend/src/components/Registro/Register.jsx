import './Register.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Register(){
    const navigate = useNavigate();
    const goToHome = () => {
      navigate("/home");
    };
    const goToInicio = () => {
      navigate("/");
    };
    return(
        <div className="registerContainer">
            <div className="registerHeader">
                <button onClick={goToInicio}>flechita</button>
                <h2>crear cuenta</h2>
            </div>
            <form>
                <div className="inputs">
                    <label htmlFor="email">Cuál es tu correo eletrónico?</label>
                    <input type="email" name='email' className='inputField' />
                    <span>mensaje de error</span>
                </div>
                <div className="inputs">
                    <label htmlFor="name">Cuál es tu nombre?</label>
                    <input type="text" name='name' className='inputField' />
                    <span>mensaje de error</span>
                </div>
                <div className="inputs">
                    <label htmlFor="password">Cuál es tu password?</label>
                    <input type="password" name='password' className='inputField' />
                    <span>mensaje de error</span>
                </div>
                <div>
                    <button type='checkbox'>c</button>
                    <span>he leido las condicones bla bla</span>
                </div>
                
                <button onClick={goToHome} type='submit' className='button'>INICIAR SESION</button>
            </form>
            

        </div>
    )
}
export default Register