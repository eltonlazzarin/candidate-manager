import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import api from '../../services/api';

interface Avatar {
  picture: {
    thumbnail: string;
  };
}

export default function AllCandidates() {
  const [avatar, setAvatar] = useState<Avatar[]>([]);

  useEffect(() => {
    api.get('api').then((response) => {
      setAvatar(response.data.results);
    });
  }, []);

  return (
    <>
      <div className="page-allcadidadtes">
        <header>
          <nav>
            <img src={logo} alt="Company Logo" />

            <input placeholder="Buscar" />

            <span>
              {avatar.map((item) => (
                <img src={item.picture.thumbnail} alt="Alt" />
              ))}
            </span>
          </nav>
        </header>
      </div>

      <div className="navbar">
        <aside>
          <ul>
            <li>
              <Link to="/" className="active">
                Todos
              </Link>
            </li>
            <li>
              <Link to="/candidatesattended">Atendidos</Link>
            </li>
            <li>
              <Link to="/trashcan">Lixeira</Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
