import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

type Props = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

const ResultCard = ({ avatar_url, url, followers, location, name }: Props) => {
  return (
    <div className="result-container">
      <img src={avatar_url} alt="foto"></img>
      <div className="result-informations">
        <div className="result-texto">Informações</div>
        <p>
          <div className="title">Perfil:</div> <Link to={``}>{url}</Link>
        </p>
        <p>
          <div className="title">Seguidores:</div> {followers}
        </p>
        <p>
          <div className="title">Localidade:</div> {location}
        </p>
        <p>
          <div className="title">Nome:</div> {name}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
