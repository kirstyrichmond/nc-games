// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from 'react-router-dom';
import '../styles/nav.scss'

const Sidebar = ({ links, close }) => {
  return (
    // <div className="sidebar" onClick={close}>
    //   {links.map((link) => (
    //     <a className="sidebar-link" href="#!" key={link.name}>
    //       {/* <FontAwesomeIcon icon={link.icon} />
    //       {link.name} */}
    //     </a>
    //   ))}
    // </div>
    <div className="sidebar" onClick={close}>
           
       <Link className='sidebar-link' to={`/categories`}>Categories</Link>
       <Link className='sidebar-link' to={`/reviews`}>Reviews</Link>
       <Link className='sidebar-link' to={`/users`}>
           Users
       </Link>
       </div>
  );
};

export default Sidebar;
