import { useSelector } from "react-redux";
import { selectPosts, selectCommentsWithUsers } from "../store/selectors";

const HomePage = () => {
  const posts = useSelector(selectPosts);
  const commentsWithUsers = useSelector(selectCommentsWithUsers);

  console.log(commentsWithUsers);
  return (
    <div>
      <h1>Hello Homepage</h1>
      <ul>
        {/* {posts.map((post) => {
          return <li>{post}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default HomePage;
