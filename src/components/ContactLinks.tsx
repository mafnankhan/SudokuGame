import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faCopyright } from '@fortawesome/free-regular-svg-icons/faCopyright'

const ContactLinks:React.FC = () => {
    return (
        <div className="contact-links">
            <a href="http://bertoort.com">
                <FontAwesomeIcon icon={faCopyright as IconProp} />
                bertoort
            </a>
            <a className="right-float" href="https://github.com/bertoort/sugoku">
                Sudoku Api Docs
                <FontAwesomeIcon icon={faGithub as IconProp} />
            </a>
        </div>
    )
}

export default ContactLinks;