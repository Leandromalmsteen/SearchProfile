import Buttom from 'components/Buttom';
import './styles.css';
import { useState } from 'react';
import ResultCard from 'pages/ResultCard';
import axios from 'axios';
import CardLoader from 'pages/ResultCard/CardLoader';

type FormData = {
  usuario: string;
};

type Profile = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

const SearchProfile = () => {
  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    usuario: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.usuario}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="search-container">
      <h1 className="text">Enconte um perfil Github</h1>
      <form onSubmit={handleSubmit}>
        <div className="search-box">
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            className="search-input"
            placeholder="Usuário Github"
            onChange={handleChange}
          />
        </div>

        <div className="botao">
          <Buttom text={'Encontrar'} />
        </div>
      </form>
      {profile && (
        <>
          {isLoading ? (
            <CardLoader />
          ) : (
            <ResultCard
              avatar_url={profile.avatar_url}
              url={profile.url}
              followers={profile.followers}
              location={profile.location}
              name={profile.name}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SearchProfile;
