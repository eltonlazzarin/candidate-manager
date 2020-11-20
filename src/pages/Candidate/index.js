import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaRegUser } from 'react-icons/fa';
import { VscKey } from 'react-icons/vsc';
import { BsCalendar } from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdKeyboardArrowLeft, MdLocationOn } from 'react-icons/md';

import './style.scss';

export default function Candidate() {
  let [pageDefaultData, setPageData] = useState('Hi, My name is');
  let [textCandidateData, setTextCandidateData] = useState('Lorraine Beck');

  function CandidateName() {
    setPageData('Hi, My name is');
    setTextCandidateData('Lorraine Beck');
  }

  function CandidateEmail() {
    setPageData('My email address is');
    setTextCandidateData('lorraine.beck@co.com');
  }

  function CandidateBirthday() {
    setPageData('My birthday is');
    setTextCandidateData('6/7/1983');
  }

  function CandidateAddress() {
    setPageData('My address is');
    setTextCandidateData('234 California St');
  }

  function CandidatePhone() {
    setPageData('My phone number is');
    setTextCandidateData('(988)-827-1338');
  }

  function CandidatePassword() {
    setPageData('My password is');
    setTextCandidateData('09879');
  }

  return (
    <div className="candidate">
      <header>
        <span>
          <Link to="/">
            <MdKeyboardArrowLeft size={28} color="#4f4f4f" />
          </Link>
        </span>
      </header>
      <main>
        <div className="header"></div>
        <div className="divider"></div>
        <div className="candidatedata">
          <img
            src="https://avatars2.githubusercontent.com/u/53025782?s=460&u=4aa2f5d075b8c3b00a77dcc0c475809f99dca504&v=4"
            alt="Candidate Avatar"
          />

          <div>
            <p>{pageDefaultData}</p>
            <p>{textCandidateData}</p>
          </div>
          <div className="icons">
            <div>
              <FaRegUser
                onMouseOver={CandidateName}
                size={40}
                color=" #a9a9a9"
              />
              <AiOutlineMail
                onMouseOver={CandidateEmail}
                size={40}
                color="#a9a9a9"
              />
              <BsCalendar
                onMouseOver={CandidateBirthday}
                size={36}
                color="#a9a9a9"
              />
              <MdLocationOn
                onMouseOver={CandidateAddress}
                size={40}
                color="#a9a9a9"
              />
              <AiOutlinePhone
                onMouseOver={CandidatePhone}
                size={40}
                color=" #a9a9a9"
              />
              <VscKey
                onMouseOver={CandidatePassword}
                size={40}
                color="#a9a9a9"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
