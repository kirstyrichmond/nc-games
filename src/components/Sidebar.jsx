import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Sidebar = ({ close }) => {
  return (
    <div className="sidebar" onClick={close}>
      <Link className="sidebar-link" to={`/categories`}>
        Categories
      </Link>
      <Link className="sidebar-link" to={`/reviews`}>
        Reviews
      </Link>
      <Link className="sidebar-link" to={`/users`}>
        Users
      </Link>
    </div>
  );
};

export default Sidebar;
