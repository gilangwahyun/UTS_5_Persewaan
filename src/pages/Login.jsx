import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulasi login
        const userData = {
            email: email,
            // Anda bisa menambahkan data lain yang diperlukan
        };

        if (email === "admin@gmail.com") {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userData", JSON.stringify(userData)); // Simpan data pengguna
            navigate("/beranda-admin"); // Redirect ke halaman admin
        } else if (email === "user@gmail.com") {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userData", JSON.stringify(userData)); // Simpan data pengguna
            navigate("/beranda"); // Redirect ke halaman user
        } else {
            alert("Email tidak terdaftar."); // Pesan jika email tidak sesuai
        }
    };

    return (
        <div className="bg-dark text-light">
            <Navbar />
            <div className="login-container">
                <div className="login-form">
                    <h3 className="text-center mb-4">Masuk ke Rental Jaya</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button 
                                type="submit" 
                                className="btn btn-warning" // Mengubah kelas menjadi btn-warning untuk warna kuning
                                style={{ backgroundColor: '#ffc107', borderColor: '#ffc107' }} // Gaya inline untuk kuning
                            >
                                Masuk
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            <a href="#" className="text-warning">
                                Lupa password?
                            </a>
                        </div>
                        <div className="text-center mt-3">
                            <span>Belum punya akun?</span>
                            <a href="/register" className="text-warning">
                                Daftar
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;