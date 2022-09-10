import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/Neider28/ninja-to-do" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
      </a>
      <h3>
        <span>
          <FontAwesomeIcon icon={faCode} />
        </span>
        by Neider Silva, 2022
      </h3>
    </footer>
  );
};

export { Footer };