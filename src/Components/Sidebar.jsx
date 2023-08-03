import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "600" : "",
    color: isActive ? "#64748b" : "",
    backgroundColor: isActive ? "#e2e8f0" : ""
  });
  return (
    <div className="sidebar">
      <sidebar>
        <div>
          <NavLink to="/" style={getActiveStyle}>
            <span>
              <i class="fa-solid fa-house"></i>
            </span>
            <span> Home</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/explore" style={getActiveStyle}>
            <span>
              <i class="fa-regular fa-compass"></i>
            </span>
            <span> Explore</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/playlist" style={getActiveStyle}>
            <span>
              <i class="fa-solid fa-list"></i>
            </span>
            <span> Playlist</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="watchlater" style={getActiveStyle}>
            <span>
              <i class="fa-solid fa-clock"></i>
            </span>
            <span>Watch Later</span>
          </NavLink>
        </div>
      </sidebar>
    </div>
  );
};

export default Sidebar;
