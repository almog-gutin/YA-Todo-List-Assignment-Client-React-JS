import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
    const navigate = useNavigate();

    const redirectToHome = () => navigate('/');

    return (
        <header className="main-header">
            <h1 onClick={redirectToHome}>Y&A Todo List</h1>
        </header>
    );
};

export default Header;
