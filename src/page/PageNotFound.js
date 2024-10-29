import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h1>
            <p>uh oh! Page Not Found</p>
                <Link to={"/"}>
                    <button>Back to Home</button>
                </Link>
        </div>
    )
}
