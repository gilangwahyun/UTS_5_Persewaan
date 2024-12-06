// src/components/Footer.jsx
import React from 'react';
import '../assets/styles/Footer.css'; // Pastikan untuk membuat file CSS untuk styling

const Footer = () => {
    return (
        <footer className="footer text-white py-4">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Kontak Kami</h5>
                        <p>Email: support@rentaljaya.com</p>
                        <p>Telepon: (021) 123-4567</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Tautan Penting</h5>
                        <ul className="list-unstyled">
                            <li><a href="/Beranda" className="text-white">Beranda</a></li>
                            <li><a href="/DaftarMobil" className="text-white">Daftar Mobil</a></li>
                            <li><a href="/TentangKami" className="text-white">Tentang Kami</a></li>
                            <li><a href="/Login" className="text-white">Masuk/Daftar</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Ikuti Kami</h5>
                        <a href="https://facebook.com" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" className="text-white"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="mt-4">
                    <p>&copy; {new Date().getFullYear()} Rental Jaya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;