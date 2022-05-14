import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Students2 from '../styles/pics/students1.jpg';
import '../styles/Registration.scss';

// For Modal
import { Modal, Button } from "react-bootstrap";

// Animate on Scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

const Registration = () => {
    //User Details
    const [user, setUser] = useState({
        id: "",
        lname: "",
        fname: "",
        mname: "",
        college: "",
        program: "",
        year: "",
        password: ""
    })
    const { id, lname, fname, mname, college, program, year, password } = user
    const [confPass, setConfPass] = useState("");

    //Check if user exist in userDB
    const userExist = id => JSON.parse(localStorage.getItem('userDB')).find(db => db.id === id) ? true : false

    //Success Modal
    const [showSuccess, setShowSuccess] = useState(false);

    //Password Not Match Modal
    const [showError, setShowError] = useState(false);

    //User Exist Modal
    const [showUserExist, setShowUserExist] = useState(false);

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Check if password and confirm password matches
        if (password === confPass) {
            // Check if User is Existing
            if (userExist(id)) {
                setShowUserExist(true);
                return
            } else {
                // Save Data
                let userDB = JSON.parse(localStorage.getItem('userDB'))
                userDB.push(user)
                localStorage.setItem('userDB', JSON.stringify(userDB))

                console.log("Password and Confirm Password match! Data is saved.")
                setShowSuccess(true);
            }

        } else {
            console.log("Password and Confirm Password does not match!")
            setShowError(true);
        }

        // For Console 
        console.log('You clicked Submit.')
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
    }

    const validate = (e, message) => {
        if (e._reactName === 'onInvalid') e.target.setCustomValidity(message)
        else e.target.setCustomValidity(message)
    }

    // Clearing the values
    const clearFields = () => {
        setUser({
            id: "",
            lname: "",
            fname: "",
            mname: "",
            college: "",
            program: "",
            year: "",
            password: ""
        })
        setConfPass("");
    }

    const handleClose = () => {
        setShowSuccess(false);
        setShowError(false);
        setShowUserExist(false);
    };

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <>
            <main className="registration-page">
                <section className="h-100">
                    <div className="container py-5 h-100" data-aos="fade-down">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="card card-registration my-4">
                                    <form onSubmit={handleSubmit}>
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
                                                                    className="form-control form-control-lg"
                                                                    value={id}
                                                                    name="id"
                                                                    pattern="[0-9]{10}"
                                                                    maxLength={10}
                                                                    onChange={onChange}
                                                                    title="Student ID must be a 10 digit number"
                                                                    onInvalid={e => validate(e, 'Student ID must be a 10 digit number')}
                                                                    onInput={e => validate(e, '')}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <label className="form-label" htmlFor="form3Example1m">Student ID</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text"
                                                                    className="form-control form-control-lg"
                                                                    value={lname}
                                                                    name="lname"
                                                                    onChange={onChange}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text"
                                                                    className="form-control form-control-lg"
                                                                    value={fname}
                                                                    name="fname"
                                                                    onChange={onChange}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <label className="form-label" htmlFor="form3Example1m1">Given Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text"
                                                                    className="form-control form-control-lg"
                                                                    value={mname}
                                                                    name="mname"
                                                                    onChange={onChange}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <label className="form-label" htmlFor="form3Example1n1">Middle Name</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="text"
                                                            className="form-control form-control-lg"
                                                            value={college}
                                                            name="college"
                                                            onChange={onChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example8">College</label>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <label className="form-label" htmlFor="form3Example8">Program Enrolled</label>
                                                            <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                                                                value={program}
                                                                name="program"
                                                                onChange={onChange}
                                                                required
                                                                autoComplete="off"
                                                            >
                                                                <option value="">Select Program</option>
                                                                <option value="Gryffindor">Gryffindor</option>
                                                                <option value="Slytherin">Slytherin</option>
                                                                <option value="Ravenclaw">Ravenclaw</option>
                                                                <option value="Hufflepuff">Hufflepuff</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-6 mb-4">
                                                            <label className="form-label" htmlFor="form3Example8">Year Level</label>
                                                            <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                                                                value={year}
                                                                name="year"
                                                                onChange={onChange}
                                                                required
                                                                autoComplete="off"
                                                            >
                                                                <option value="">Select Year</option>
                                                                <option value="First Year">First Year</option>
                                                                <option value="Second Year">Second Year</option>
                                                                <option value="Third Year">Third Year</option>
                                                                <option value="Fourth Year">Fourth Year</option>
                                                                <option value="Fifth Year">Fifth Year</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-lg"
                                                            value={password}
                                                            name="password"
                                                            pattern="^(?=.{8,}$)(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
                                                            minLength={8}
                                                            onChange={onChange}
                                                            title="Password must be at least 8 characters with at least 1 special character, 1 uppercase letter, and 1 number"
                                                            onInvalid={e => validate(e, 'Password must be at least 8 characters  with at least 1 special character, 1 uppercase letter, and 1 number')}
                                                            onInput={e => validate(e, '')}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example90">Password</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password"
                                                            className="form-control form-control-lg"
                                                            value={confPass}
                                                            name="confPass"
                                                            onChange={(e) => setConfPass(e.target.value)}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example99">Confirm Password</label>
                                                    </div>

                                                    <div className="d-flex justify-content-center py-3">
                                                        <button type="button" className="btn btn-secondary btn-lg" onClick={clearFields}>
                                                            Cancel
                                                        </button>

                                                        <button type="submit" className="btn btn-warning btn-lg ms-2">Submit</button>
                                                    </div>
                                                    <div className="text-center pt-2">
                                                        <p>Already registered? <Link to="/login" aria-current="page" id="Login-Link">Login</Link></p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="homepage-link">Go back to <Link to="/" aria-current="page" id="Homepage-Link">Homepage</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Registration Success Modal - Will go back to Home Page after Registration*/}
                    <Modal show={showSuccess} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="reg-success">Registration Success</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Your account has been created successfully. </Modal.Body>
                        <Modal.Footer>
                            <Link to="/" aria-current="page" id="Register-link">
                                <Button variant="primary">
                                    Okay
                                </Button>
                            </Link>
                        </Modal.Footer>
                    </Modal>
                    {/* Error Modal for Password not Match */}
                    <Modal show={showError} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="reg-success">Message</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Password and Confirm Password does not match.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Change
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* Modal for Account Existing*/}
                    <Modal show={showUserExist} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="reg-success">Message</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>The user account already exists</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </section>
            </main>
        </>
    );
}

export default Registration;
