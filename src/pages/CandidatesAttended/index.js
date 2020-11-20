import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSelectAll, MdDeleteSweep, MdDelete } from 'react-icons/md';
import { BsCheckAll } from 'react-icons/bs';

import logo from '../../assets/images/logo.png';

import api from '../../services/api';

import allcandidates from '../../services/candidatesattended.json';

interface Avatar {
  email: string;
  phone: string;
  picture: {
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
  name: {
    first: string;
  };
  location: {
    city: string;
  };
}

export default function CandidatesAttended() {
  const [textInput, setTextInput] = useState('');
  const [avatarAccount, setAvatarAccount] = useState<Avatar[]>([]);
  const [candidates, setCandidates] = useState(allcandidates);

  useEffect(() => {
    api.get('api').then((response) => {
      setAvatarAccount(response.data.results);
    });
  }, []);

  return (
    <>
      <div className="page-allcadidadtes">
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

      <div className="navbar">
        <aside>
          <ul>
            <li>
              <div>
                <MdSelectAll size={26} color="#a9a9a9" />
                <Link to="/">Todos</Link>
              </div>
            </li>
            <li>
              <div>
                <BsCheckAll size={26} color="#8dc63f" />
                <Link to="/candidatesattended" className="active">
                  Atendidos
                </Link>
              </div>
            </li>
            <li>
              <div>
                <MdDeleteSweep size={26} color="#a9a9a9" />
                <Link to="/trashcan">Lixeira</Link>
              </div>
            </li>
          </ul>
        </aside>

        <section className="candidateslist">
          {!textInput
            ? candidates.map((item) => (
                <main key={item.login.uuid}>
                  <Link to="/candidate">
                    <div>
                      <img src={item.picture.thumbnail} alt={item.name.first} />
                      <h2>{item.name.first}</h2>
                    </div>
                  </Link>
                  <div>
                    <p>{item.email}</p>

                    <p>{item.phone}</p>

                    <p>{item.location.city}</p>
                  </div>

                  <div>
                    <MdDelete size={26} color="#a9a9a9" />
                    <MdSelectAll size={26} color="#a9a9a9" />
                  </div>
                </main>
              ))
            : candidates
                .filter((candidate) => candidate.name.first === textInput)
                .map((item) => (
                  <main key={item.login.uuid}>
                    <Link to="/candidate">
                      <div>
                        <img
                          src={item.picture.thumbnail}
                          alt={item.name.first}
                        />
                        <h2>{item.name.first}</h2>
                      </div>
                    </Link>
                    <div>
                      <p>{item.email}</p>

                      <p>{item.phone}</p>

                      <p>{item.location.city}</p>
                    </div>

                    <div>
                      <MdDelete size={26} color="#a9a9a9" />
                      <MdSelectAll size={26} color="#a9a9a9" />
                    </div>
                  </main>
                ))}
        </section>
      </div>
    </>
  );
}
