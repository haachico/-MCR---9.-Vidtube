import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Vidtube</h1>
      </Link>
    </div>
  );
};

export default Header;
