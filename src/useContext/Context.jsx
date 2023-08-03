import { createContext, useState } from "react";
import { videos } from "../data/AllVideosData";
import { categories } from "../data/CategoriesData";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState(categories);
  const [allVideos, setAllVideos] = useState(videos);
  const [watchLater, setWatchLater] = useState([]);
  const [playlistsData, setPlaylistsData] = useState([]);

  const addToWatchLater = (id) => {
    const addedToWatchlater = allVideos.filter((video) => video._id === id);
    setWatchLater((prev) => [...prev, ...addedToWatchlater]);
  };

  const removeFromWatchLater = (id) => {
    setWatchLater(watchLater.filter((video) => video._id !== id));
  };

  return (
    <div>
      <Context.Provider
        value={{
          categoriesData,
          setCategoriesData,
          allVideos,
          setAllVideos,
          watchLater,
          setWatchLater,
          playlistsData,
          setPlaylistsData,
          addToWatchLater,
          removeFromWatchLater,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};
