import {useParams} from 'react-router-dom';

function GreetingPage() {
  const paramaters = useParams();
  console.log(paramaters);
  return (
    <div>
      <p> Hello {paramaters.name}! </p>
    </div>
  );
}

export default GreetingPage;
