import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSelectAll, MdDeleteSweep } from 'react-icons/md';
import { BsCheckAll } from 'react-icons/bs';

import allcandidates from '../../services/allcandidates.json';

import CandidateList from '../../components/CandidateList';
import Header from '../../components/Header';

export default function AllCandidates() {
  const [textInput, setTextInput] = useState('');
  const [candidates, setCandidates] = useState(allcandidates);

  return (
    <>
      <Header textInput={textInput} setTextInput={setTextInput} />

      <div className="navbar">
        <aside>
          <ul>
            <li>
              <div>
                <MdSelectAll size={26} color="#8dc63f" />
                <Link to="/" className="active">
                  Todos
                </Link>
              </div>
            </li>
            <li>
              <div>
                <BsCheckAll size={26} color="#a9a9a9" />
                <Link to="/candidatesattended">Atendidos</Link>
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

        <CandidateList textInput={textInput} candidates={candidates} />
      </div>
    </>
  );
}
