import './Playlist.css';



function Playlist(props) {

    useEffect(() => {
        const getFilteredSongs = async () => {
          const cabecera = new Headers();
          cabecera.append("token", localStorage.getItem("token"));
          const res = await fetch(`http://localhost:3001/contextualfilter`, {
            headers: cabecera,
            body: JSON.stringify(props.elecciones)
          });
          const data = await res.json();
    
          setAllfilters(data);
        };
    
        getAllfilters();
      }, []);

return(
    <div>
        soy la playlist
    </div>
)
        
}


export default Playlist;