import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GithubButton = ({url}) => {
    return (
            <a href={url} className="button is-outlined">
                <FontAwesomeIcon icon={faGithub} style={{marginRight:'.75rem'}}/>
                  GitHub
            </a>
    )
}

export default GithubButton;
