import { useParams } from "react-router-dom";

const UserPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Hello {params.name}!</h1>
    </div>
  );
};

export default UserPage;
