import './Playlist.css';
import { useNavigate, useParams } from 'react-router-dom';



function Playlist(props) {
    const {id} = useParams()

    // useEffect(() => {
    //     const getFilteredSongs = async () => {
    //       const cabecera = new Headers();
    //       cabecera.append("token", localStorage.getItem("token"));
    //       const res = await fetch(`http://localhost:3001/contextualfilter`, {
    //         headers: cabecera,
    //         body: JSON.stringify(props.elecciones)
    //       });
    //       const data = await res.json();
    
    //       setAllfilters(data);
    //     };
    
    //     getAllfilters();
    //   }, []);

return(
    <div>
        {`soy la playlist ${id}`}
    </div>
)
        
}


export default Playlist;