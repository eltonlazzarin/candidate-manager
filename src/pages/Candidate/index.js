import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FaRegUser } from 'react-icons/fa';
import { VscKey } from 'react-icons/vsc';
import { BsCalendar } from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdKeyboardArrowLeft, MdLocationOn } from 'react-icons/md';

import candidatesapi from '../../services/candidatesapi.json';

export default function Candidate() {
  const [defauldAPI, setDefaultAPI] = useState(candidatesapi);
  const [candidates, setCandidates] = useState([]);
  const [pageDefaultData, setPageData] = useState('Hi, My name is');
  const [textCandidateData, setTextCandidateData] = useState('Cameron Fowler');

  const { uuid } = useParams();

  useEffect(() => {
    const findCandidate = defauldAPI.filter(
      (candidate) => candidate.login.uuid === uuid,
    );

    setCandidates(findCandidate);
  }, []);

  function CandidateName(item) {
    setPageData('Hi, My name is');
    setTextCandidateData(`${item.name.first} ${item.name.last}`);
  }

  function CandidateEmail(item) {
    setPageData('My email address is');
    setTextCandidateData(item.email);
  }

  function CandidateBirthday(item) {
    const parse = item.dob.date;
    const today = new Date(parse);
    const year = today.getFullYear();
    const day = today.getDate();
    const month = today.getMonth();
    const fullDateParsed = `${day}/${month}/${year}`;

    setPageData('My birthday is');
    setTextCandidateData(fullDateParsed);
  }

  function CandidateAddress() {
    setPageData('My address is');
    setTextCandidateData('234 California St');
  }

  function CandidatePhone(item) {
    setPageData('My phone number is');
    setTextCandidateData(item.phone);
  }

  function CandidatePassword(item) {
    setPageData('My password is');
    setTextCandidateData(item.login.password);
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
          {candidates.map((item) => (
            <>
              <img
                key={item.login.uuid}
                src={item.picture.large}
                alt={item.name.first}
              />

              <div>
                <p>{pageDefaultData}</p>
                <p>{textCandidateData}</p>
              </div>
              <div className="icons">
                <div>
                  <FaRegUser
                    onMouseOver={() => CandidateName(item)}
                    size={34}
                    color=" #a9a9a9"
                  />
                  <AiOutlineMail
                    onMouseOver={() => CandidateEmail(item)}
                    size={36}
                    color="#a9a9a9"
                  />
                  <BsCalendar
                    onMouseOver={() => CandidateBirthday(item)}
                    size={30}
                    color="#a9a9a9"
                  />
                  <MdLocationOn
                    onMouseOver={() => CandidateAddress(item)}
                    size={36}
                    color="#a9a9a9"
                  />
                  <AiOutlinePhone
                    onMouseOver={() => CandidatePhone(item)}
                    size={36}
                    color=" #a9a9a9"
                  />
                  <VscKey
                    onMouseOver={() => CandidatePassword(item)}
                    size={36}
                    color="#a9a9a9"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
    </div>
  );
}
