import Image from "next/image";
import Link from "next/link";
import { Col, Card } from "react-bootstrap";

export default function PostItem({ id, title, body }) {
  return (
    <Col key={id}>
      <Card bg="info" text="white" style={{ width: "18rem" }} className="mb-2">
        <Card.Header>{title}</Card.Header>
        <Card.Body>{body}</Card.Body>
      </Card>
    </Col>
  );
}
