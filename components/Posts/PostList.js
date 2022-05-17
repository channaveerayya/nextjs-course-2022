import Head from "next/head";
import EventItem from "./PosttItem.js";
import { Row } from "react-bootstrap";
export default function PostList({ items }) {
  return (
    <div className="container mt-2">
      <Head>
        <title>User Posts</title>
        <meta
          name="description"
          content="Listing the all posts from the users fro jsonplaceholder"
        />
      </Head>
      <Row>
        {items.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </Row>
    </div>
  );
}
