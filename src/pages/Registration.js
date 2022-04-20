import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../styles/Registration.scss';

// For Modal
import { Modal, Button } from "react-bootstrap";

const Registration = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                            <h3 className="mb-5 text-uppercase">Student registration form</h3>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form3Example1m">Student ID Number</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form3Example1n">Last name</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form3Example1m1">Given Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form3Example1n1">Middle Name</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example8" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example8">College</label>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label" for="form3Example8">Program Enrolled</label>
                                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                        <option selected>Select Program</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                        <option value="3">Option 3</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example9" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example9">Year Level</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example90" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example90">Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example99" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example99">Confirm Password</label>
                                            </div>

                                            <div className="d-flex justify-content-center pt-3">
                                                <Link to="/" aria-current="page">
                                                    <button type="button" className="btn btn-secondary btn-lg">
                                                        Cancel
                                                    </button>
                                                </Link>
                                                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handleShow}>Submit</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your account has been created successfully. </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Okay
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </>
    );
}

export default Registration;
