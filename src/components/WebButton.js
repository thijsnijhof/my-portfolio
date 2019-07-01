import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const WebButton = ({url}) => {
    return (
            <a href={url} className="button is-success">
                <FontAwesomeIcon icon={faGlobe} style={{marginRight:'.75rem'}}/>
                  Live
            </a>
    )
}

export default WebButton;
