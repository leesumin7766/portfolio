import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoTo.css";

const GoTo = () => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/main');
  };

  return (
    <div className="goto">
      <h1>Welcome to sumin's portfolio</h1>
      <button 
        onClick={handleShowMore}
        className="show-more-button"
      >
        Show more?
      </button>
    </div>
  );
};

export default GoTo;