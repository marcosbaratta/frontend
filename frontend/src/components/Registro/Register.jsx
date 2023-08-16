import './Register.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function Register(){
    const navigate = useNavigate();
    const goToHome = () => {
      navigate("/home");
    };
    const goToInicio = () => {
      navigate("/");
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

  
    const register = async (e) => {
        e.preventDefault();
        try {
            const myHeader = new Headers();
            myHeader.append('content-type', 'application/json');
            const requestOptions = {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify({password: password,email: email, name:username })
            }    
            
            const res = await fetch(`http://localhost:3001/register`, requestOptions)
            const data = await res.json()
            console.log(res,data);
            if (res.ok){
                localStorage.setItem('token', data.token);
                goToHome();
            }else{
                throw new Error(res)

            }

            
        } catch (error) {
            console.log(error);
            
        }

      }  
    
    
    function handleUsername (ev) {
        const input = ev.target.value;
        setUsername(input) 

    }    
    function handlePassword (ev) {
        const input = ev.target.value;
        setPassword(input) 

    }    
    function handleEmail (ev) {
        const input = ev.target.value;
        setEmail(input) 

    }    


    
    return(
        <div className="registerContainer">
            <div className="registerHeader">
                <button onClick={goToInicio}>flechita</button>
                <h2>crear cuenta</h2>
            </div>
            <form onSubmit={register}>
                <div className="inputs">
                    <label htmlFor="email">Cuál es tu correo eletrónico?</label>
                    <input type="email" name='email' className='inputField' onChange={e=>handleEmail(e)} />
                    {/* <span>mensaje de error</span> */}
                </div>
                <div className="inputs">
                    <label htmlFor="name">Cuál es tu nombre?</label>
                    <input type="text" name='name' className='inputField' onChange={e=>handleUsername(e)}/>
                    {/* <span>mensaje de error</span> */}
                </div>
                <div className="inputs">
                    <label htmlFor="password">Cuál es tu password?</label>
                    <input type="password" name='password' className='inputField' onChange={e=>handlePassword(e)}/>
                    {/* <span>mensaje de error</span> */}
                </div>
                <div>
                    <button type='checkbox'>c</button>
                    <span>he leido las condicones bla bla</span>
                </div>
                
                <button  type='submit' className='button'>INICIAR SESION</button>
                
            </form>
            

        </div>
    )
}
export default Register


