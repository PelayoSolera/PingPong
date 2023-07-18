import React from "react";

function BankAccountItem({ key, bankAccount }) {
  return (
    <div>
      <p key={key}>{bankAccount.accountName}</p>
    </div>
  );
}

export default BankAccountItem;
