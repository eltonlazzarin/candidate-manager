import React from 'react';
import { Link } from 'react-router-dom';
import { MdSelectAll, MdDelete, MdCheck } from 'react-icons/md';

export default function CandidateList({ textInput, candidates }) {
  return (
    <section className="candidateslist">
      {!textInput
        ? candidates.map((item) => (
            <main key={item.login.uuid}>
              <Link to={`/candidates/${item.login.uuid}`}>
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
                <MdCheck size={26} color="#a9a9a9" />
              </div>
            </main>
          ))
        : candidates
            .filter((candidate) => candidate.name.first === textInput)
            .map((item) => (
              <main key={item.login.uuid}>
                <Link to={`/candidates/${item.login.uuid}`}>
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
                  <MdCheck size={26} color="#a9a9a9" />
                </div>
              </main>
            ))}
    </section>
  );
}
