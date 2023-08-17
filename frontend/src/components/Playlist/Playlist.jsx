import './Playlist.css';
import { useNavigate, useParams } from 'react-router-dom';



function Playlist(props) {
    const {id} = useParams()



return(
    <div>
        {`soy la playlist ${id}`}
    </div>
)
        
}


export default Playlist;