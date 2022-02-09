import logo from "./logo.svg";
import "./App.css";
import { selectPost } from "./store/posts/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPostsForMe, destroyPostForMe } from "./store/posts/actions";
import { PostForm } from "./components/PostForm";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  const [formHidden, setFormHidden] = useState(false);

  useEffect(() => {
    dispatch(getPostsForMe);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello, world </h1>
        <ul>
          {posts.map((post, i) => (
            <div key={i}>
              <button onClick={() => dispatch(destroyPostForMe(post.id))}>X</button>
              <li >
                {post.title}
              </li>
            </div>
          ))}
        </ul>
        <button onClick={() => setFormHidden(!formHidden)}>hide form</button>
        {!formHidden ? <PostForm></PostForm> : null}
      </header>
    </div>
  );
}

export default App;
