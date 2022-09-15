import { useSelector } from "react-redux";
import { selectProfile } from "../store/user/selectors";

const HomePage = () => {
  const profile = useSelector(selectProfile);
  return (
    <div>
      <h3>Home</h3>
      {profile ? <p>Hello {profile.name}</p> : <p>Please login!</p>}
    </div>
  );
};

export default HomePage;
