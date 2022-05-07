import React, { useState } from "react";
import { Link } from "react-router-dom";
import Students2 from './styles/pics/students1.jpg';
import './styles/Registration.scss';

// For Modal
import { Modal, Button } from "react-bootstrap";

const Registration = () => {
    const [id, setId] = useState("");
    const [lname, setLname] = useState("");
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [college, setCollege] = useState("");
    const [program, setProgram] = useState(0);
    const [year, setYear] = useState(" ");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        e.preventDefault()
        console.log('You clicked submit.')

        const input = {
            id: id,
            lname: lname,
            fname: fname,
            mname: mname,
            college: college,
            program: program,
            year: year,
            password: password,
            confPass: confPass,
        }

        console.log(input);
        setShow(true);
    }


    const validate = (e, message) => {
        if(e._reactName === 'onInvalid') e.target.setCustomValidity(message)
        else e.target.setCustomValidity(message)
    }


    const clearFields = () => {
        // clearing the values
        setId("");
        setLname("");
        setFname("");
        setMname("");
        setCollege("");
        setProgram(0);
        setYear("");
        setPassword("");
        setConfPass("");
    }

    const handleSubmit = () => {
        clearFields()
        handleClose()
    }


    return (
        <form onSubmit={handleShow}>
            <body className="registration-page">
                <section className="h-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                    <div className="card card-registration my-4">
                                        <div className="row g-0">
                                            <div className="col-xl-6 d-none d-xl-block">
                                                <img
                                                    src={Students2}
                                                    alt="Sample photo"
                                                    className="img-fluid"
                                                    style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="card-body p-md-5 text-black">
                                                    <h3 className="mb-5" id="stud-reg-form">Student Registration Form</h3>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input
                                                                    type="text"
                                                                    id="form3Example1m"
                                                                    className="form-control form-control-lg"
                                                                    value={id}
                                                                    pattern="[0-9]{10}"
                                                                    maxLength={10} 
                                                                    onChange={(e) => setId(e.target.value)}
                                                                    onInvalid={e => validate(e, 'Student ID must be a 10 digit number')} 
                                                                    onInput={e => validate(e, '')}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <label className="form-label" for="form3Example1m">Student ID</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" id="form3Example1n" className="form-control form-control-lg"
                                                                    value={lname}
                                                                    onChange={(e) => setLname(e.target.value)}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <label className="form-label" for="form3Example1n">Last name</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" id="form3Example1m1" className="form-control form-control-lg"
                                                                    value={fname}
                                                                    onChange={(e) => setFname(e.target.value)}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <label className="form-label" for="form3Example1m1">Given Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" id="form3Example1n1" className="form-control form-control-lg"
                                                                    value={mname}
                                                                    onChange={(e) => setMname(e.target.value)}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <label className="form-label" for="form3Example1n1">Middle Name</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="text" id="form3Example8" className="form-control form-control-lg"
                                                            value={college}
                                                            onChange={(e) => setCollege(e.target.value)}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <label className="form-label" for="form3Example8">College</label>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <label className="form-label" for="form3Example8">Program Enrolled</label>
                                                            <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                                                                value={program}
                                                                onChange={(e) => setProgram(e.target.value)}
                                                                required
                                                                autoComplete="off"
                                                            >
                                                                <option value="">Select Program</option>
                                                                <option value="1">Gryffindor</option>
                                                                <option value="2">Slytherin</option>
                                                                <option value="3">Ravenclaw</option>
                                                                <option value="3">Hufflepuff</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="text" id="form3Example9" className="form-control form-control-lg"
                                                            value={year}
                                                            onChange={(e) => setYear(e.target.value)}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <label className="form-label" for="form3Example9">Year Level</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="password"
                                                            id="form3Example90"
                                                            className="form-control form-control-lg"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <label className="form-label" for="form3Example90">Password</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="form3Example99" className="form-control form-control-lg"
                                                            value={confPass}
                                                            onChange={(e) => setConfPass(e.target.value)}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <label className="form-label" for="form3Example99">Confirm Password</label>
                                                    </div>

                                                    <div className="d-flex justify-content-center py-3">
                                                        <button type="button" className="btn btn-secondary btn-lg" onClick={clearFields}>
                                                            Cancel
                                                        </button>

                                                        <button type="submit" className="btn btn-warning btn-lg ms-2">Submit</button>
                                                    </div>
                                                    <div className="text-center">
                                                        <p>Already registered? <Link to="/login" aria-current="page" id="Login-link">Login</Link></p>
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
                            <Modal.Title className="reg-success">Registration Success</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Your account has been created successfully. </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleSubmit}>
                                Okay
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </section>
            </body>
        </form>
    );
}

export default Registration;
