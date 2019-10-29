import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const ADD_COMMENT = gql`
    mutation SaveComment($name: String, $content: String) {
        saveComment(input: { name: $name, content: $content }) {
            id
            name
            content
        }
    }
`;

export default function Form({ refresh }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [addComment] = useMutation(ADD_COMMENT);

    function handleSubmit(e) {
        addComment({ variables: { name, content: description } });
        refresh();
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite o seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Digite o seu comentário"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
            />
            <button type="submit">Comentar</button>
        </form>
    );
}
