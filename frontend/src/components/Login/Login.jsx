import './Login.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';




function Login(){
    const navigate = useNavigate();
    const goToHome = () => {
      navigate("/home");
    };
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  
    const login = async (e, errorcito) => {
        e.preventDefault();
        try {
            const myHeader = new Headers();
            myHeader.append('content-type', 'application/json');
            const requestOptions = {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify({password: password,email: username})
            }    
            
            const res = await fetch(`http://localhost:3001/login`, requestOptions)
            const data = await res.json()
            console.log(res,data);
            if (res.ok){
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', username );
                goToHome();
            }else{
                throw new Error(res);

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

    


      

    return(
        <div className="loginContainer">
            <div className="loginHeader">
                <button>flechita</button>
                <h2>Ingresa a tu cuenta</h2>
            </div>
            <form onSubmit={login}>
                <div className="inputs">
                    <label htmlFor="name">Cuál es tu nombre de usuario?</label>
                    <input type="text" name='text' className='inputField' onChange={(ev) => handleUsername(ev)} />
                    <span>mensaje de error</span>
                </div>
                <div className="inputs">
                    <label htmlFor="password">Cuál es tu password?</label>
                    <input type="text" name='password' className='inputField' onChange={(ev)=>handlePassword(ev)} />
                    <span>mensaje de error</span>
                </div>
                <button  type='submit' className='button'>INICIAR SESION</button>
                
            </form>
            <div></div>

            </div>)}

export default Login