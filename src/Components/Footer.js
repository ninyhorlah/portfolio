import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

let Footer = () => {
    const social = {
        twitter: 'https://twitter.com/ninyhorlah',
        github: 'https://github.com/ninyhorlah',
        linkedin: 'https://www.linkedin.com/in/esther-ninyo/',
        email: 'mailto:ninyhorlah6@gmail.com'
    }
    return(
        <div>
            <footer className="footer">
                <div>
                    <h5>Developed by Esther Ninyo ❤️ 2020</h5>
                </div>
                <div>
                    <div className='web'>
                        <a href={social.email} target='_blank' rel='noopener noreferrer'>EMAIL</a>
                        <a href={social.twitter} target='_blank' rel='noreferrer'>TWITTER</a>
                        <a href={social.github} target='_blank' rel='noreferrer'>GITHUB</a>
                        <a href={social.linkedin} target='_blank' rel='noreferrer'>LINKEDIN</a>
                        
                    </div>
                    <div className='mobile'>
                        <a href={social.email} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href={social.twitter} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href={social.github} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={social.linkedin} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;