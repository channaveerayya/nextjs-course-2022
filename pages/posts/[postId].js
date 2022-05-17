import axios from "axios";
import { Card } from "react-bootstrap";
function PostDetailPage({ data }) {
  return (
    <Card>
      <Card.Header>Post {data.id}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{data.body}</p>
          <footer className="blockquote-footer">{data.title}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export const getStaticPaths = async () => {
  const resData = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  const paramsArray = resData.data.map((post) => {
    return { params: { postId: post.id.toString() } };
  });
  return {
    paths: paramsArray,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const resData = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.postId}`
  );

  return {
    props: {
      data: resData.data,
    },
  };
};

export default PostDetailPage;
