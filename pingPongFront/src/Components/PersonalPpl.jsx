import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function PersonalPpl({ person, userInfo }) {
  //const { userInfo } = useContext(UserContext);



  
  return (
    <div>
        <Link state={{ person, userInfo }} className="transactionLink" to="/transaction">
      <div className="pplCard">
        <div className="pplAvatEtCard">

        <div className="personalCardwitImg">
          <Avatar sx={{ width: 56, height: 56, margin: "0 0.5rem" }}
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
          <p>Payment: {person.id_fake} to {userInfo.fake_id}</p>
          <div className="thumbsNMessages">
                  <ThumbUpOffAltIcon sx={{ color: "lightgrey"}} />
                  <p>0</p>
                  </div>
        </div>
            </div>
        <div className="personalCardAmount"><p className="amountP">{person.amount}</p></div>
      </div>
            </Link>
    </div>
  );
}

export default PersonalPpl;
