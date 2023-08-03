import { Link } from "react-router-dom";

const PlaylistCard = ({
  id,
  image,
  title,
  description,
  handleDeletePlaylist
}) => {
  return (
    <div className="playlist--card">
      <button className="close--btn" onClick={() => handleDeletePlaylist(id)}>
        x
      </button>

      <img src={image} alt={title} />
      <Link to={`/playlist/${id}`}>
        <h4>{title}</h4>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default PlaylistCard;
