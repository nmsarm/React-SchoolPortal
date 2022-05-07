import React, { useState } from "react";
import { Link } from "react-router-dom";
import Students from './styles/pics/students2.jpg';
import './styles/Login.scss';

// For Modal
import { Modal, Button } from "react-bootstrap";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true)
    };

    // clearing the values
    const clearFields = () => {
        setId("");
        setPassword("");
    }

    const handleSubmit = () => {
        clearFields()
        handleClose()
    }

    return (
        <>
            <main className="login-page">
                <section className="h-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="card card-registration my-4">
                                    <form onSubmit={handleShow}>
                                        <div className="row g-0">
                                            <div className="col-xl-6 d-none d-xl-block">
                                                <img
                                                    src={Students}
                                                    alt="Sample photo"
                                                    className="img-fluid"
                                                    style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="card-body p-md-5 text-black">
                                                    <h3 className="mb-5" id="student-login">Student Login</h3>
                                                    <div className="row">
                                                        <div className="mb-4">
                                                            <div className="form-outline">
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    value={id}
                                                                    pattern="[0-9]{10}"
                                                                    maxLength={10}
                                                                    onChange={(e) => setId(e.target.value)}
                                                                    required
                                                                />
                                                                <label className="form-label" htmlFor="form3Example1m" >
                                                                    Student ID
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="form-outline mb-4">
                                                            <input
                                                                type="password"
                                                                className="form-control form-control-lg"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                required
                                                            />
                                                            <label className="form-label" htmlFor="form3Example90">
                                                                Password
                                                            </label>
                                                        </div>
                                                        <div className="d-flex justify-content-center py-3">

                                                            <button type="button" className="btn btn-secondary btn-lg" onClick={clearFields} id="Cancel">
                                                                Cancel
                                                            </button>

                                                            <button type="submit" className="btn btn-warning btn-lg mx-2" id="Login-btn">
                                                                Login
                                                            </button>
                                                        </div>
                                                        <div className="text-center">
                                                            <p>Not a member? <Link to="/registration-form" aria-current="page" id="Register-link">Register</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="login-success">Login Success</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Welcome to Platform 9 3/4!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleSubmit}>
                                    Okay
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Login;
