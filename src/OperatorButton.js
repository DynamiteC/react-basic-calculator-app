import React from "react";

const OperatorButton = ({ operator, onClick }) => {
  return <button onClick={() => onClick(operator)}>{operator}</button>;
};

export default OperatorButton;
