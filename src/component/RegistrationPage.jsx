import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./App.css";
const RegistrationPage = () => {
  const navigation = useNavigate();
  return (
    <div>
      <h1 style={{ color: "red" }} className="text-center">
        Registration successfully
      </h1>
      <div>
        <Button onClick={() => navigation("/login")} variant="success">
          Go to Loin Page
        </Button>{" "}
      </div>
    </div>
  );
};

export default RegistrationPage;
