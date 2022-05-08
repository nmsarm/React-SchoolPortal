import React from "react";
import { Link } from "react-router-dom";
import '../styles/Homepage.scss';

const Homepage = () => {
    return (
        <>
            <div className="content-container">
                <h2 className="mb-2" id="welcome">Welcome to</h2>
                <h1 className="mb-5" id="platform">Platform 9 3/4</h1>
                <div className="text-container">
                    <p className="mb-5" id="welcome">Experience Hogwarts School of Witchcraft and Wizardy like never before.
                        Explore the castle's exterior, get lost in Forbidden Forest and fly around the Quidditch pitch - it's all
                        here, waiting for you. Look out for hotspots where you can click and learn more about the castle and its
                        grounds.</p>
                </div>

                <div className="d-flex justify-content-center py-3">
                    <Link to="/login" aria-current="page" id="Register-link">
                        <button type="button" className="btn-home btn-secondary btn-lg"> LOGIN </button>
                    </Link>
                    <Link to="/registration-form" aria-current="page" id="Register-link">
                        <button type="button" className="btn-home btn-warning btn-lg mx-2"> REGISTER </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Homepage;
