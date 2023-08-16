import "./Contextual.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Contextual() {
  const navigate = useNavigate();
    const goToHome = () => {
      navigate("/home");
    };
  const [filters, setAllfilters] = useState({});

  const [occasion, setOccasion] = useState({});
  const [mood, setMood] = useState({});
  const [weather, setWeather] = useState({});
  const [elecciones, setElecciones] = useState({});

  function handleOccasion(ev) {
    setOccasion(ev.target.value)
  }
  function handleMood(ev) {
    setMood(ev.target.value)
  }
  function handleWeather(ev) {
    setWeather(ev.target.value)
  }

  function handleElecciones(ev){
    ev.preventDefault();
    const eleccionesData = {};
    if(Object.keys(occasion).length && occasion !== 'juasjuasxd' ){
      eleccionesData.ocassions_id = occasion;
    }

    // if(mood !== 'juasjuasxd')
    if(Object.keys(mood).length && mood !== 'juasjuasxd' ){
      eleccionesData.moods_id = mood;
    }
    if(Object.keys(weather).length && weather !== 'juasjuasxd' ){
      eleccionesData.weathers_id = weather;
    }
    setElecciones(eleccionesData)
    console.log(elecciones);

  }

  

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
      <form onSubmit={(ev)=>handleElecciones(ev)} action="POST">
      <div className="filter">
        <label>¿Cuál es la ocasión?</label>
        <select onChange={handleOccasion} name="name">
        <option value={'juasjuasxd'}></option>
          {filters?.occasions?.map((elemento) => (
            <option value={elemento.id}>{elemento.name}</option>
          ))}
        </select>
      </div>

      {
        <div className="filter">
          <label>¿Cómo te sientes?</label>
          <select onChange={handleMood} name="name">
          <option value={'juasjuasxd'}></option>
            {filters?.moods?.map((elemento) => (
              <option value={elemento.id}>{elemento.name}</option>
            ))}
          </select>
        </div>
      }
      {
        <div className="filter">
          <label>¿Cómo está el clima?</label>
          <select onChange={handleWeather} name="name">
          <option value={'juasjuasxd'}></option>
            {filters?.weathers?.map((elemento) => (
              <option value={elemento.id}>{elemento.name}</option>
            ))}
          </select>
          
        </div>
      }
      <div className="genres-container">
        <label>Selecciona hasta 3 géneros:</label>
        <div className="genres">
        <option></option>
          {filters?.genres?.map((e) => (
            <button>{e.name}</button>
          ))}
        </div>
      </div>
      <button type="submit">Create Playlist</button>
      </form>
      <div>{localStorage.getItem('token')}</div>
    </div>
  );
}

export default Contextual;
