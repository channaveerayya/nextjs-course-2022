import Head from "next/head";
import { ListGroup, Container } from "react-bootstrap";
export default function Todos({ todos }) {
  return (
    <Container>
      <Head>
        <title>User Todos</title>
        <meta
          name="description"
          content="Listing the all Todos from the users fro jsonplaceholder"
        />
      </Head>
      <ListGroup>
        {todos.map((todo) =>
          todo.completed ? (
            <ListGroup.Item variant="primary">{todo.title}</ListGroup.Item>
          ) : (
            <ListGroup.Item variant="danger">{todo.title}</ListGroup.Item>
          )
        )}
      </ListGroup>
    </Container>
  );
}
