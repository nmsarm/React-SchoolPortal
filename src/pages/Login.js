import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../styles/Login.scss';

// For Modal
import { Modal, Button } from "react-bootstrap";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clearFields = () => {
        // clearing the values
        setId("");
        setPassword("");

    }

    const handleSubmit = () => {
        clearFields()
        handleClose()
    }

    return (
        <>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample photo"
                                            className="img-fluid"
                                            style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Login</h3>
                                            <form>
                                                <div className="row">
                                                    <div className="mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                type="text"
                                                                id="form3Example1m"
                                                                className="form-control form-control-lg"
                                                                value={id}
                                                                onChange={(e) => setId(e.target.value)}                                               
                                                            />
                                                            <label className="form-label" for="form3Example1m" >
                                                                Student ID
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="password"
                                                            id="form3Example90"
                                                            className="form-control form-control-lg" 
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <label className="form-label" for="form3Example90">
                                                            Password
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-center py-3">

                                                        <button type="button" className="btn btn-secondary btn-lg" onClick={clearFields}>
                                                            Cancel
                                                        </button>

                                                        <button type="button" className="btn btn-warning btn-lg mx-2" onClick={handleShow}>Login</button>
                                                    </div>
                                                    <div className="text-center">
                                                        <p>Not a member? <Link to="/registration-form" aria-current="page">Register</Link></p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Login Success</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Welcome to the Student Portal! </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleSubmit}>
                                Okay
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </section>
        </>
    );
}

export default Login;
