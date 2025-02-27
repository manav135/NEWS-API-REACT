import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css';

const Header = ({title}) => (
    <nav className='nav-wrapper blue-grey darken-3'>
        {title}
    </nav>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
