import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "..";
import Video from "../Components/Video";

const PlaylistVideos = () => {
  const { playlistsData } = useContext(Context);
  const { id } = useParams();

  const selectedPlaylist = playlistsData.find(
    (playlist) => playlist.playlistId == id
  );
  console.log(selectedPlaylist);
  return (
    <div>
      <h2>Playlist - {selectedPlaylist?.title}</h2>
      <div className="playlistVideos--list">
        {[...new Set(selectedPlaylist?.videos)].map((video) => (
          <Video
            id={video._id}
            image={video.thumbnail}
            title={video.title}
            views={video.views}
            category={video.category}
            creator={video.creator}
          />
        ))}
      </div>
    </div>
  );
};
export default PlaylistVideos;
