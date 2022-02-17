import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Supersecretpage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <p>Don't look!</p>
    </div>
  );
};

export default Supersecretpage;
