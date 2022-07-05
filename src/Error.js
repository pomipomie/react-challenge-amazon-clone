import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
    return (
        <div className="error">
            <h1>ERROR 404</h1>
            <h2>Page Not Found 😿</h2>
            <Link className="error__return" to={'/'}>
                <p className="error__return">Return to main site</p>
            </Link>
        </div>
    )
}

export default Error;