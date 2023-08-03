import { useContext } from "react";

import { Context } from "..";
import PlaylistCard from "../Components/PlaylistCard";
const Playlist = () => {
  const { playlistsData, setPlaylistsData } = useContext(Context);

  const handleDeletePlaylist = (id) => {
    setPlaylistsData(
      playlistsData.filter((playlist) => playlist.playlistId !== id)
    );
  };
  return (
    <div className="playlists--list">
      {playlistsData.length > 0 ? (
        playlistsData.map((e) => (
          <PlaylistCard
            key={e.playlistId}
            id={e.playlistId}
            image={e.image}
            title={e.title}
            description={e.description}
            handleDeletePlaylist={handleDeletePlaylist}
          />
        ))
      ) : (
        <h4>Your playlist is empty.</h4>
      )}
    </div>
  );
};

export default Playlist;
