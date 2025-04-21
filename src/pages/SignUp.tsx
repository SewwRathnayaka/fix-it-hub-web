
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/select-role?action=signup", { replace: true });
  }, [navigate]);
  return null;
};
export default SignUp;
