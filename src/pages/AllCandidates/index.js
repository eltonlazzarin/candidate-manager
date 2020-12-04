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
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Header
        textInput={textInput}
        setTextInput={setTextInput}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      <div className="navbar">
        {isOpen ? (
          <aside>
            <ul>
              <li>
                <div>
                  <MdSelectAll size={24} color="#8dc63f" />
                  <Link to="/" className="active">
                    All
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <BsCheckAll size={24} color="#a9a9a9" />
                  <Link to="/candidatesattended">Attended</Link>
                </div>
              </li>
              <li>
                <div>
                  <MdDeleteSweep size={24} color="#a9a9a9" />
                  <Link to="/candidatesdeclined">Declined</Link>
                </div>
              </li>
            </ul>
          </aside>
        ) : (
          ''
        )}

        <CandidateList textInput={textInput} candidates={candidates} />
      </div>
    </>
  );
}
