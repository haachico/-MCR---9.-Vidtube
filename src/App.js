import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import CategoryVideos from "./Pages/CategoryVideos";
import Explore from "./Pages/Explore";
import Playlist from "./Pages/Playlist";
import WatchLater from "./Pages/WatchLater";
import DetailsPage from "./Pages/DetailsPage";
import PlaylistVideos from "./Pages/PlaylistVideos";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="videos/:category" element={<CategoryVideos />} />
          <Route path="watch/:id" element={<DetailsPage />} />
          <Route path="playlist/:id" element={<PlaylistVideos />} />
          <Route path="explore" element={<Explore />} />
          <Route path="playlist" element={<Playlist />} />

          <Route path="watchlater" element={<WatchLater />} />
        </Route>
      </Routes>
    </div>
  );
}
