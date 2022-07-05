import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="error">
            <h1>ERROR 404</h1>
            <h2>Page Not Found</h2>
            <Link to={'/'}>
                <p>Return to Home</p>
            </Link>
        </div>
    )
}

export default Error;