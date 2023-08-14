import './Contextual.css'
import { useEffect, useState } from 'react';





function Contextual() {


    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
          const res = await fetch(`http://localhost:3001/songs`);
          const data = await res.json();
    
          setPokemons(data.results);
        };
    
        getPokemons();
    
      }, []);
      console.log(pokemons);


    const lista2 = [
        {
            id: 2,
            name: 'cocinar'
        },
        {
            id: 3,
            name: 'hacer ejercicio'
        }
    ]

    const generos = [
        {id:1, name:'rock'},{id:2, name:'blues'},{id:3, name:'heavy metal'},{id:4, name:'cumbia'},{id:5, name:'tango'}]

  
    return (
     
      <div className='container'>
        <div className='header'>
      <button>flechita</button>
      <h1>Musica Contextual</h1>
        </div>
        <div className="filter">
            <label>¿Cuál es la ocasión?</label>
            <select name="name" >
                {lista2.map(elemento => <option value={elemento.id}>{elemento.name}</option>)}

            </select> 
        </div>
        <div className="filter">
            <label>¿Cómo te sientes?</label>
            <select type="select" />
        </div>
        <div className="filter">
            <label>¿Cómo está el clima?</label>
            <select type="select"  />
        </div>
        <div className="genres-container">
            <label>Selecciona hasta 3 géneros:</label>
            <div className='genres'>
               {generos.map(e => <button>{e.name}</button>)}
            </div>
        </div>
      </div>
        
        

    )
  }
  
  export default Contextual
  