import { useParams } from "react-router-dom";

const StudentPage = () => {
  const params = useParams();
  console.log("Params:", params);
  return <h2>Hello {params.name}</h2>;
};

export default StudentPage;
