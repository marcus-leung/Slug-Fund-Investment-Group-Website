import React from "react";
import Person from "./Person";

function Members() {
  return (
    <div className="members">
      <div className="container">
        <div className="row pt-5">
          <div className="col-3" align="center">
            <Person name="Name" role="role" />
          </div>
          <div className="col-3" align="center">
            <Person name="Name" role="role" />
          </div>
          <div className="col-3" align="center">
            <Person name="Name" role="role" />
          </div>
          <div className="col-3" align="center">
            <Person name="Name" role="role" />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-3" align="center">
            <Person name="Name" role="role" />
          </div>
          <div className="col-3" align="center">
            <Person name="Name" role="role" />
          </div>
          <div className="col-3" align="center">
            <Person name="Name" role="role" />
          </div>
          <div className="col-3" align="center">
            <Person name="Name" role="role" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
