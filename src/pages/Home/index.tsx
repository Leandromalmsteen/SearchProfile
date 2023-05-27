import Buttom from 'components/Buttom';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1 className="top-text">Desafio Github API</h1>
      <p className="bottom-text">DevSuperior - Escola de programação</p>
      <Link to="SearchProfile">
        <Buttom text={'Começar'} />
      </Link>
    </div>
  );
};
export default Home;
