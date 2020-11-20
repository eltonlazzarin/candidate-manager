import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import logo from '../../assets/images/logo.png';

export default function Header({ textInput, setTextInput }) {
  const [avatarAccount, setAvatarAccount] = useState([]);

  useEffect(() => {
    api.get('api').then((response) => {
      setAvatarAccount(response.data.results);
    });
  }, []);

  return (
    <div className="container">
      <header>
        <nav>
          <img src={logo} alt="Company Logo" />

          <input
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
            placeholder="Buscar"
          />

          <span>
            {avatarAccount.map((item) => (
              <img
                key={item.login.uuid}
                src={item.picture.thumbnail}
                alt={item.name.first}
              />
            ))}
          </span>
        </nav>
      </header>
    </div>
  );
}
