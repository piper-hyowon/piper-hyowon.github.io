import React from "react";

const Button = ({ name, onClick, type }) => {
  return (
    <button
      type={type}
      style={{
        margin: 8,
        padding: "10px 16px",
        color: "white",
        backgroundColor: "#FF019A",
        border: "none",
        borderRadius: ".4rem",
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
