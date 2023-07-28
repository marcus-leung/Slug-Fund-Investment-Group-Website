import React from "react";
import { Outlet } from "react-router-dom";

function Research(props) {
    return (
        <div className="research">
            <div className="container">
                <div className="align-items-center">

                <h1 className="display-5 text-center my-4" >{props.group} Research Papers</h1>
                
                <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Research;