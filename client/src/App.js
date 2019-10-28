import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./App.css";

import Comment from "./components/Comment";
import Form from "./components/Form";

const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
      content
    }
  }
`;

const SAVE_COMMENT = gql`
 mutation ( $name: String, $content: String  ) {
  saveComment (input: {
    name: $name,
    content: $content
  }) {
    id
    name
    content
    createdAt
    updatedAt
  }
}
`

export default function App() {
  const { loading, error, data, refetch } = useQuery(GET_COMMENTS);
  const [saveComment, { error: errorSave }] = useMutation(SAVE_COMMENT)

  if (error || errorSave) return "Pô, deu ruim demais.";

  const handleSubmit = async (e, name, content) => {
    e.preventDefault()
    await saveComment({
      variables: {  name, content }
    })
    refetch()
  }

  return (
    <>
      <h1>RocketComments</h1>
      <Form handleSubmit={handleSubmit} />
      {loading ? (
        "Carregando..."
      ) : (
        <section className="comments">
          {data.comments.map(({ id, name, content }) => (
            <Comment key={id} name={name} description={content} />
          ))}
        </section>
      )}
    </>
  );
}
