import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
      <div className="nav-container">
        <nav className="nav bg-primary">
          <Link to="/" className="nav-logo-text">
            <h4 className="title">Github API</h4>
          </Link>
        </nav>
      </div>
    );
};

export default Navbar;
