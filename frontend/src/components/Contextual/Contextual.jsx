import "./Contextual.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Contextual() {
  const navigate = useNavigate();
    const goToHome = () => {
      navigate("/home");
    };
  const [filters, setAllfilters] = useState({});


  useEffect(() => {
    const getAllfilters = async () => {
    const cabecera = new Headers();
    cabecera.append('token', localStorage.getItem('token'))
      const res = await fetch(`http://localhost:3001/filters`, {
        headers: cabecera
      });
      const data = await res.json();

      setAllfilters(data);
    };

    getAllfilters();
  }, []);
  console.log(filters);

  return (
    <div className="container">
      <div className="header">
        <button onClick={goToHome}>flechita</button>
        <h1>Musica Contextual</h1>
      </div>
      <div className="filter">
        <label>¿Cuál es la ocasión?</label>
        <select name="name">
          {filters?.occasions?.map((elemento) => (
            <option value={elemento.id}>{elemento.name}</option>
          ))}
        </select>
      </div>
      {
        <div className="filter">
          <label>¿Cómo te sientes?</label>
          <select name="name">
            {filters?.moods?.map((elemento) => (
              <option value={elemento.id}>{elemento.name}</option>
            ))}
          </select>
        </div>
      }
      {
        <div className="filter">
          <label>¿Cómo está el clima?</label>
          <select name="name">
            {filters?.weathers?.map((elemento) => (
              <option value={elemento.id}>{elemento.name}</option>
            ))}
          </select>
          
        </div>
      }
      <div className="genres-container">
        <label>Selecciona hasta 3 géneros:</label>
        <div className="genres">
          {filters?.genres?.map((e) => (
            <button>{e.name}</button>
          ))}
        </div>
      </div>
      <button onClick={()=>login()}>Login</button>
      <div>{localStorage.getItem('token')}</div>
    </div>
  );
}

export default Contextual;
