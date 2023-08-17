import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Tinder() {
    const navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const [auxiliar, setAuxiliar] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getAllArtists = async () => {
    const cabecera = new Headers();
    cabecera.append("token", localStorage.getItem("token"));
    const res = await fetch(`http://localhost:3001/tinder`, {
      method: "GET",
      headers: cabecera,
    });
    const data = await res.json();

    setArtists(data);
    console.log(data);
  };

  useEffect(() => {
    getAllArtists();
  }, []);

  function handleMeGusta() {
    setAuxiliar([...auxiliar, artists[currentIndex]]);

    setCurrentIndex(currentIndex + 1);
  }
  function handleNoMeGusta() {
    setCurrentIndex(currentIndex + 1);
  }
  const goToPlaylist = () => {
    navigate("/playlist");
  };

  const getFilteredSongs = async (auxiliar) => {
      const cabecera = new Headers();

      cabecera.append("token", localStorage.getItem("token"));
      cabecera.append("username", localStorage.getItem("username"));

      cabecera.append("Content-Type", "application/json");
      const res = await fetch(`http://localhost:3001/tinder/playlist`, {
        method: "POST",
        headers: cabecera,
        body: JSON.stringify(auxiliar),
      });
      const data = await res.json();
  
  
      // goToPlaylist();

}
  function handleButton(){
    getFilteredSongs(auxiliar)
  }
  return (
    <div>
      {currentIndex < artists.length ? (
        <div>
          <div>{artists[currentIndex]?.name}</div>
          <button onClick={handleMeGusta}>Me Gusta</button>
          <button onClick={handleNoMeGusta}>No me guta</button>
        </div>
      ) : (
        <button onClick={handleButton}>IR A TU NUEVA PLAYLIST</button>
      )}
    </div>
  );
}

export default Tinder;
