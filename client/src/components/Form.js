import React, { useState } from "react";

export default function Form({ handleSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form onSubmit={(e) => {
      handleSubmit(e, name, description)
      setName("")
      setDescription("")
    }}>
      <input
        type="text"
        placeholder="Digite o seu nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite o seu comentário"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Comentar</button>
    </form>
  );
}
