import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { Card, Row, Col } from "react-bootstrap";
export default function Home(props) {
  return (
    <div className="container mt-2">
      <Head>
        <title>Users</title>
        <meta
          name="description"
          content="Listing the all users from jsonplaceholder"
        />
      </Head>
      <Row>
        {props.data.map((user) => (
          <Col key={user.id}>
            <Card
              bg="info"
              text="white"
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>{user.name}</Card.Header>
              <Card.Body>
                <Card.Title>{user.username} </Card.Title>
                <Card.Text>{user.phone}</Card.Text>
                <div>{user.address.street}</div>
                <p> Zip Code {user.address.zipcode}</p>
                <Row>
                  {" "}
                  <Col>
                    <Link href={`posts/${user.id}/todos`}>
                      <Card.Title className="text-black">Todos</Card.Title>
                    </Link>
                  </Col>
                  <Col>
                    {" "}
                    <Link href={`posts/${user.id}/posts`}>
                      <Card.Title className="text-black">Posts</Card.Title>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}{" "}
      </Row>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: {
      data: res.data,
    },
    revalidate: 60,
  };
};
