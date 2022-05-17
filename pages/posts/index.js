import React from "react";
import PostList from "../../components/Posts/PostList";
import { Container } from "react-bootstrap";
import { getFeaturedEvents } from "../../dummy-data";

function Posts() {
  return (
    <Container>
      <PostList items={getFeaturedEvents()} />
    </Container>
  );
}

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
    revalidate: 10,
  };
};

export default Posts;
