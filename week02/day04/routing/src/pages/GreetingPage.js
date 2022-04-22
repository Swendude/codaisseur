import { useParams } from "react-router-dom";

const GreetingPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Greeting</h1>
      <p className="redText">
        Hello, {params.cow} & {params.sheep}
      </p>
    </div>
  );
};
export default GreetingPage;
