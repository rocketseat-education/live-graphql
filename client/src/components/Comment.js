import React from "react";

export default function Comment({ id, name, description, onClick }) {
  return (
    <div className="comment">
      <div className="comment-content">
        <p className="comment-name">Nome: {name}</p>
        <p>{description}</p>
      </div>
      <div className="comment-action">
        <button onClick={() => onClick(id)}>X</button>
      </div>
    </div>
  );
}
