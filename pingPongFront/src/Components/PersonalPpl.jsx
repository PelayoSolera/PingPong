import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Avatar from "@mui/material/Avatar";

function PersonalPpl({ person, userInfo }) {
  //const { userInfo } = useContext(UserContext);

  console.log(userInfo);
  return (
    <div>
      <div className="personalCard">
        <div className="personalCardwitImg">
          <Avatar
            className="transactionAvatar"
            alt="Remy Sharp"
            src={`https://unavatar.io/github/${person.firstname}`}
          />
        </div>
        <div className="personalCardBody">
          <p>
            {person.firstname} {person.lastname} paid {userInfo.firstname}{" "}
            {userInfo.lastname}
          </p>
          <p>Payment: {person.id_fake}</p>
        </div>
        <div className="personalCardAmount"><p className="amountP">{person.amount}</p></div>
      </div>
    </div>
  );
}

export default PersonalPpl;
