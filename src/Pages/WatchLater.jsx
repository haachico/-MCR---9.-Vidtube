import { useContext } from "react";
import Video from "../Components/Video";

import { Context } from "..";
const WatchLater = () => {
  const { watchLater } = useContext(Context);
  const lightWatch = <i class="fa-regular fa-clock"></i>;

  const darkWatch = <i class="fa-solid fa-clock"></i>;

  // const allUniqueWatchLater = new Set(watchLater);
  return (
    <div className="watchlater--list">
      {watchLater.length > 0 ? (
        watchLater?.map((video) => (
          <Video
            id={video._id}
            image={video.thumbnail}
            title={video.title}
            views={video.views}
            category={video.category}
            creator={video.creator}
            darkClock={darkWatch}
            lightClock={lightWatch}
          />
        ))
      ) : (
        <h4>No video added yet.</h4>
      )}
    </div>
  );
};

export default WatchLater;
