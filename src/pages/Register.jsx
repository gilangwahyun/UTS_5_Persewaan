import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Register.css";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    noSim: "",
    noTelp: "",
    alamat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate registration logic here
    console.log("Form submitted: ", formData);

    // Redirect to home page
    navigate("/beranda");
  };

  return (
    <div className="register-container bg-dark text-light">
      <Navbar />

      <div className="register-form">
        <h3 className="text-center mb-4">Daftar ke Rental Jaya</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="noSim" className="form-label">
              No Sim
            </label>
            <input
              type="text"
              className="form-control"
              id="noSim"
              name="noSim"
              value={formData.noSim}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="noTelp" className="form-label">
              No Telp
            </label>
            <input
              type="text"
              className="form-control"
              id="noTelp"
              name="noTelp"
              value={formData.noTelp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <input
              type="text"
              className="form-control"
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-custom">
              Daftar
            </button>
          </div>
          <div className="text-center mt-3">
            <span>Sudah punya akun?</span>{" "}
            <a href="/Login" className="text-warning">
              Masuk
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
