import React, { useState } from "react";
import "../assets/styles/Profil.css";
import Navbar from "../components/Navbar";

const Profil = () => {
  const [profileData, setProfileData] = useState({
    name: "Pdiddy",
    birthDate: "2003-09-03",
    gender: "laki-laki",
    address: "Seturan Jogja",
    phone: "081234567890",
    email: "user@example.com",
    password: "********",
  });

  const handleEditProfile = () => {
    console.log("Profile updated", profileData);
  };

  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar />
      <div className="container mt-5 pt-5 profile-container">
        {/* Profile Section */}
        <div className="profile-section">
          <h4 className="section-title">Informasi Pengguna</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                id="nama"
                value={profileData.name}
                readOnly
              />
            </div>
            <div className="mb-3 row">
              <label htmlFor="tanggal-lahir" className="col-sm-3 col-form-label">
                Tanggal Lahir
              </label>
              <div className="col-sm-4">
                <input
                  type="date"
                  className="form-control"
                  id="tanggal-lahir"
                  value={profileData.birthDate}
                  readOnly
                />
              </div>
              <label className="col-sm-3 col-form-label">Jenis Kelamin</label>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  value={profileData.gender}
                  readOnly
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="alamat" className="form-label">
                Alamat
              </label>
              <textarea
                className="form-control"
                id="alamat"
                rows="2"
                value={profileData.address}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nomor-telepon" className="form-label">
                Nomor Telepon
              </label>
              <input
                type="text"
                className="form-control"
                id="nomor-telepon"
                value={profileData.phone}
                readOnly
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
                value={profileData.email}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="kata-sandi" className="form-label">
                Kata Sandi
              </label>
              <input
                type="password"
                className="form-control"
                id="kata-sandi"
                value={profileData.password}
                readOnly
              />
            </div>
          </form>
        </div>

        {/* Edit Profile Button */}
        <div className="text-center mt-4">
          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#editProfileModal"
          >
            Edit Profil
          </button>
        </div>

        {/* Edit Profile Modal */}
        <div
          className="modal fade"
          id="editProfileModal"
          tabIndex="-1"
          aria-labelledby="editProfileModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editProfileModalLabel">
                  Edit Profil
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="edit-nama" className="form-label">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edit-nama"
                      value={profileData.name}
                      onChange={(e) =>
                        setProfileData({ ...profileData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="edit-tanggal-lahir"
                      className="col-sm-4 col-form-label"
                    >
                      Tanggal Lahir
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="date"
                        className="form-control"
                        id="edit-tanggal-lahir"
                        value={profileData.birthDate}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            birthDate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-alamat" className="form-label">
                      Alamat
                    </label>
                    <textarea
                      className="form-control"
                      id="edit-alamat"
                      rows="2"
                      value={profileData.address}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-nomor-telepon" className="form-label">
                      Nomor Telepon
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edit-nomor-telepon"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData({ ...profileData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="edit-email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({ ...profileData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-kata-sandi" className="form-label">
                      Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="edit-kata-sandi"
                      value={profileData.password}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEditProfile}
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
