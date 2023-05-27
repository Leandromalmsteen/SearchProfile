import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import SearchProfile from 'pages/SearchProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="searchProfile" element={<SearchProfile />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
