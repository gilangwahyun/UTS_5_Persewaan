// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'bootstrap'; // Import Bootstrap JavaScript for dropdown functionality
import '../assets/styles/Navbar.css';
import logo from "../assets/images/logo.png";
import { List, LogOut, User2 } from 'lucide-react';

const Navbar = () => {
    useEffect(() => {
        // Navbar scroll effect
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Handle login state
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const loginButton = document.getElementById('loginButton');
        const profileDropdown = document.getElementById('profileDropdown');

        if (isLoggedIn) {
            loginButton.style.display = 'none';
            profileDropdown.style.display = 'block';
        } else {
            loginButton.style.display = 'block';
            profileDropdown.style.display = 'none';
        }

        // Initialize Bootstrap dropdown
        const dropdownElement = document.getElementById('profileMenuLink');
        if (dropdownElement) {
            new Dropdown(dropdownElement);
        }
    }, []);

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('isLoggedIn');
        window.location.href = '/Beranda';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="Rental Jaya Logo" height="40" />
                    Rental Jaya
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Beranda">Beranda</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/DaftarMobil">Daftar Mobil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/TentangKami">Tentang Kami</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex ms-3">
                        <a
                            id="loginButton"
                            href="/Login"
                            className="btn btn-custom me-2"
                        >
                            Masuk/Daftar
                        </a>
                        <div className="dropdown" id="profileDropdown" style={{ display: 'none' }}>
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="profileMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-user"></i>
                            </button>
                            <ul
                                className="dropdown-menu dropdown-menu-end dropdown-menu-dark"
                                aria-labelledby="profileMenuLink"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="/Profil">
                                        <User2 size={20} className='me-2'/>
                                        Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/Pesanan">
                                        <List size={20} className='me-2'/>
                                        Pesanan
                                    </NavLink>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        id="logoutLink"
                                        href="/Beranda"
                                        onClick={handleLogout}
                                    >
                                        <LogOut size={20} className='me-2'/>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
