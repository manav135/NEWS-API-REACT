import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css';


const Footer = ({NewsAPI}) => (
    <footer className='page-footer blue-grey darken-3'>
        <div className='footer-copyright'>
            <div className='container'>
                <a className='grey-text text-lighten-4 right' >{NewsAPI}</a>
            </div>
        </div>
    </footer>
);

Footer.propTypes = {
    NewsAPI: PropTypes.string.isRequired
}

export default Footer;
