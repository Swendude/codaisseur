import { useSelector } from "react-redux";
import { selectPosts } from "../store/selectors";

const HomePage = () => {
  const posts = useSelector(selectPosts);
  return (
    <div>
      <h1>Hello Homepage</h1>
      <ul>
        {posts.map((post) => {
          return <li>{post}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomePage;
