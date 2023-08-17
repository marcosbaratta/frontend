import "./Playlist.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Playlist() {
  const { id } = useParams();

  const [songs, setSongs] = useState([]);
  const playlistSearch = { playlist_id: parseInt(id) };

  const getSongsById = async (playlistSearch) => {
    const cabecera = new Headers();
    cabecera.append("token", localStorage.getItem("token"));
    cabecera.append('content-type', 'application/json');
    const res = await fetch(`http://localhost:3001/playlist`, {
      method: "POST",
      headers: cabecera,
      body: JSON.stringify(playlistSearch),
    });
    const data = await res.json();

    setSongs(data);
    console.log(data);

  };

  useEffect(() => {
    getSongsById(playlistSearch);

  }, []);

  return (
    <div>
      <div>REPRODUCTOR MUSICAL</div>
      {songs.map((s)=>
      <div>
        <div>{s.song}</div>
        <div>{s.artist}</div>
        <div>{s.duration}</div>
      </div>
      )}
    <div>{songs[0]?.song}</div>
    </div>
  );
}

export default Playlist;
