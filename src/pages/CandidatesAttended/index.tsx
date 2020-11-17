import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSelectAll, MdDeleteSweep, MdDelete, MdCheck } from 'react-icons/md';
import { BsCheckAll } from 'react-icons/bs';

import logo from '../../assets/images/logo.png';

import api from '../../services/api';

interface Avatar {
  picture: {
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
}

export default function CandidatesAttended() {
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
          <main>
            <div>
              {avatar.map((item) => (
                <img
                  key={item.login.uuid}
                  src={item.picture.thumbnail}
                  alt="Alt"
                />
              ))}
              <h2>Elton</h2>
            </div>
            <div>
              <p>elton.lazzarin@outlook.com</p>
              <p>(960)-861-1890</p>
              <p>São José do Rio Preto - SP</p>
            </div>
            <div>
              <MdDelete size={26} color="#a9a9a9" />
              <MdSelectAll size={26} color="#a9a9a9" />
              <MdCheck size={26} color="#a9a9a9" />
            </div>
          </main>
          <main>
            <div>
              {avatar.map((item) => (
                <img
                  key={item.login.uuid}
                  src={item.picture.thumbnail}
                  alt="Alt"
                />
              ))}
              <h2>Elton</h2>
            </div>
            <div>
              <p>elton.lazzarin@outlook.com</p>
              <p>(960)-861-1890</p>
              <p>São José do Rio Preto - SP</p>
            </div>
            <div>
              <MdDelete size={26} color="#a9a9a9" />
              <MdSelectAll size={26} color="#a9a9a9" />
              <MdCheck size={26} color="#a9a9a9" />
            </div>
          </main>
          <main>
            <div>
              {avatar.map((item) => (
                <img
                  key={item.login.uuid}
                  src={item.picture.thumbnail}
                  alt="Alt"
                />
              ))}
              <h2>Elton</h2>
            </div>
            <div>
              <p>elton.lazzarin@outlook.com</p>
              <p>(960)-861-1890</p>
              <p>São José do Rio Preto - SP</p>
            </div>
            <div>
              <MdDelete size={26} color="#a9a9a9" />
              <MdSelectAll size={26} color="#a9a9a9" />
              <MdCheck size={26} color="#a9a9a9" />
            </div>
          </main>
          <main>
            <div>
              {avatar.map((item) => (
                <img
                  key={item.login.uuid}
                  src={item.picture.thumbnail}
                  alt="Alt"
                />
              ))}
              <h2>Elton</h2>
            </div>
            <div>
              <p>elton.lazzarin@outlook.com</p>
              <p>(960)-861-1890</p>
              <p>São José do Rio Preto - SP</p>
            </div>
            <div>
              <MdDelete size={26} color="#a9a9a9" />
              <MdSelectAll size={26} color="#a9a9a9" />
              <MdCheck size={26} color="#a9a9a9" />
            </div>
          </main>
        </section>
      </div>
    </>
  );
}
