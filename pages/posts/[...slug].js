import axios from "axios";
import PostList from "../../components/Posts/PostList";
import Todos from "../../components/Todos";
function FilteredPostsPage({ data, type }) {
  if (type === "todos") return <Todos todos={data || []} />;
  else if (type === "posts") return <PostList items={data || []} />;
}
export default FilteredPostsPage;

export const getServerSideProps = async (ctx) => {
  const {
    params: { slug },
  } = ctx;
  if (slug[1] === "todos" || slug[1] === "posts") {
    let resData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${slug[0]}/${slug[1]}`
    );

    return {
      props: {
        data: resData.data,
        type: slug[1],
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};
