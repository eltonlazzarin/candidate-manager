import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../assets/images/logo.png';

export default function Header({ textInput, setTextInput, isOpen, setIsOpen }) {
  return (
    <div className="container">
      <header>
        <nav>
          <img src={logo} alt="Company Logo" />
          <GiHamburgerMenu
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            size={26}
          />

          <input
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
            placeholder="Search"
          />

          <span>
            <img 
              src='https://randomuser.me/api/portraits/thumb/women/1.jpg'
              alt="Avatar"
            />
          </span>
        </nav>
      </header>
    </div>
  );
}
