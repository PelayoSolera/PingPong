import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function BankAccountItem({ bankAccount, deleteBankAccount }) {
  return (
    <div className="bankAccountItem">
        <div className="bankAccountItemPee">
      <p key={bankAccount.accountId}>{bankAccount.accountName} </p>
        </div>
        <div className="bankAccountItemSVG">
        <DeleteForeverIcon onClick={() => deleteBankAccount(bankAccount.accountId)} sx={{fontSize: "2rem", ":hover": {color: "red"}, cursor: "pointer"}}/>
        </div>
    </div>
  );
}

export default BankAccountItem;
