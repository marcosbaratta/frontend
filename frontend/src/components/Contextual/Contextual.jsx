import "./Contextual.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Playlist from "../Playlist/Playlist";

function Contextual() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  //conseguimos los datos para llenar las opciones del form
  const [filters, setAllfilters] = useState({});

  const [occasion, setOccasion] = useState({});
  const [mood, setMood] = useState({});
  const [weather, setWeather] = useState({});
  const [genre, setGenre] = useState([]);


  const [filteredSongs, setFilteredSongs] = useState({});

  function handleOccasion(ev) {
    setOccasion(parseInt(ev.target.value));
  }
  function handleMood(ev) {
    setMood(parseInt(ev.target.value));
  }
  function handleWeather(ev) {
    setWeather(parseInt(ev.target.value));
  }

  function handleElecciones(ev) {
    ev.preventDefault();

    const eleccionesData = {};
    if (Object.keys(occasion).length && occasion !== "juasjuasxd") {
      eleccionesData.ocassions_id = occasion;
    }

    // if(mood !== 'juasjuasxd')
    if (Object.keys(mood).length && mood !== "juasjuasxd") {
      eleccionesData.moods_id = mood;
    }
    if (Object.keys(weather).length && weather !== "juasjuasxd") {
      eleccionesData.weathers_id = weather;
    }
    if (genre.length) {
      eleccionesData.genre = genre;
    }

    getFilteredSongs(eleccionesData)
  }

  function handleGenre(ev) {
    ev.preventDefault();
    const genre_id = parseInt(ev.target.value);
    const checkExists = genre.includes(genre_id);

    if (genre.length < 3 && !checkExists) {
      setGenre([...genre, genre_id]);

      return;
    }

    if (checkExists) {
      const newGenre = genre.filter((id) => id != genre_id);
      setGenre(newGenre);
    }
  }

  useEffect(() => {
    const getAllfilters = async () => {
      const cabecera = new Headers();
      cabecera.append("token", localStorage.getItem("token"));
      const res = await fetch(`http://localhost:3001/filters`, {
        headers: cabecera,
      });
      const data = await res.json();

      setAllfilters(data);
    };

    getAllfilters();
  }, []);



    const getFilteredSongs = async (eleccionesData) => {
      const cabecera = new Headers();

      cabecera.append("token", localStorage.getItem("token"));
      cabecera.append("Content-Type", "application/json");
      const res = await fetch(`http://localhost:3001/contextualfilter`, {
        method: "POST",
        headers: cabecera,
        body: JSON.stringify(eleccionesData),
      });
      const data = await res.json();

      setFilteredSongs(data);
      console.log(data);
    };


  return (
    <div className="container">
      <div className="header">
        <button onClick={goToHome}>flechita</button>
        <h1>Musica Contextual</h1>
      </div>
      <form >
        <div className="filter">
          <label>¿Cuál es la ocasión?</label>
          <select onChange={handleOccasion} name="name">
            <option value={"juasjuasxd"}></option>
            {filters?.occasions?.map((elemento) => (
              <option key={elemento.id} value={elemento.id}>
                {elemento.name}
              </option>
            ))}
          </select>
        </div>

        {
          <div className="filter">
            <label>¿Cómo te sientes?</label>
            <select onChange={handleMood} name="name">
              <option value={"juasjuasxd"}></option>
              {filters?.moods?.map((elemento) => (
                <option key={elemento.id} value={elemento.id}>
                  {elemento.name}
                </option>
              ))}
            </select>
          </div>
        }
        {
          <div className="filter">
            <label>¿Cómo está el clima?</label>
            <select onChange={handleWeather} name="name">
              <option value={"juasjuasxd"}></option>
              {filters?.weathers?.map((elemento) => (
                <option key={elemento.id} value={elemento.id}>
                  {elemento.name}
                </option>
              ))}
            </select>
          </div>
        }
        <div className="genres-container">
          <label>Selecciona hasta 3 géneros:</label>
          <div className="genres">
            <option></option>
            {filters?.genres?.map((e) => (
              <button
                style={
                  genre.includes(e.id)
                    ? {
                        color: `white`,
                        backgroundColor: `green`,
                        borderRadius: `5px`,
                        padding: `5px`,
                      }
                    : { color: `black` }
                }
                onClick={handleGenre}
                value={e.id}
                key={e.id}
              >
                {e.name}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleElecciones}>Create Playlist</button>
      </form>

      {/* <Playlist bodyrequest={elecciones}/> */}
    </div>
  );
}

export default Contextual;
