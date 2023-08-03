import { useContext } from "react";
import { Context } from "..";
import { useParams } from "react-router-dom";
import Video from "../Components/Video";

const CategoryVideos = () => {
  const { allVideos } = useContext(Context);

  const { category } = useParams();

  const categoryVideos = allVideos.filter(
    (video) => video.category === category
  );

  return (
    <div className="categoryVideos--list">
      {categoryVideos.map((video) => (
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
  );
};

export default CategoryVideos;
