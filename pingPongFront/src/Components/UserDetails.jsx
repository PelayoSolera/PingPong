import React from "react";
import Avatar from "@mui/material/Avatar";

function UserDetails({ userInfo }) {
  return (
    <div className="userInfo">
      {userInfo ? (
        <div>
          <Avatar
            alt="Remy Sharp"
            src={`https://unavatar.io/github/${userInfo.firstname}`}
          />
          <p>
            <p>
              {userInfo.firstname} {userInfo.lastname}
            </p>
            <p>{userInfo.email}</p>
          </p>
        </div>
      ) : (
        <div>
          <p>Edgar J</p>
          <p>@_KathatrinaBernier</p>
        </div>
      )}

      <p>
        <b>$ 1,681</b>
        <br />
        <span>Account Balance</span>
      </p>
    </div>
  );
}

export default UserDetails;
