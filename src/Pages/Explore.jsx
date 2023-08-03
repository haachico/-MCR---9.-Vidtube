import { useContext, useState } from "react";
import Video from "../Components/Video";

import { Context } from "..";
const Explore = () => {
  const { allVideos } = useContext(Context);
  const [searchText, setSearchText] = useState("");

  const filteredVideos = allVideos.filter((e) =>
    e.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <div className="searchinput--div">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search with title"
          className="search--input"
        />
        <span className="search--icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <div className="explore--list">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <Video
              id={video._id}
              image={video.thumbnail}
              title={video.title}
              views={video.views}
              category={video.category}
              creator={video.creator}
            />
          ))
        ) : (
          <h4>No video with such title found.</h4>
        )}
      </div>
    </div>
  );
};

export default Explore;
