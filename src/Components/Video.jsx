import { useContext } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
const Video = ({ id, image, title, views, category, creator }) => {
  const { watchLater, addToWatchLater, removeFromWatchLater } = useContext(
    Context
  );

  const lightClock = <i class="fa-regular fa-clock"></i>;

  const darkClock = <i class="fa-solid fa-clock"></i>;
  return (
    <div className="video">
      <span className="clock">
        {" "}
        {watchLater.map((e) => e._id === id).includes(true) ? (
          <span onClick={() => removeFromWatchLater(id)}>{darkClock}</span>
        ) : (
          <span onClick={() => addToWatchLater(id)}>{lightClock}</span>
        )}
      </span>
      <img src={image} alt={title} />

      <Link to={`/watch/${id}`}>
        <div className="description">
          <div className="img">
            <img
              src={
                "https://fastly.picsum.photos/id/117/40/40.jpg?hmac=y57dOhIuRURtCFb9gH1-fF2IPmlo1pnoIy9CVbZqpxA"
              }
              alt=""
            />
          </div>
          <div>
            <h5>{title}</h5>
            <h5>{category}</h5>
            <div>
              <p>{views}</p>
              <p>|</p>
              <p>{creator}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
