import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserPage = () => {
  const navigation = useNavigate();
  const loguserdata = useSelector((state) => state.logPagereducer.value);
  const [tokendata, stateValue] = useState([]);

  useEffect(() => {
    getcall();
  }, []);
  const getcall = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: loguserdata,
    };
    await axios
      .get(
        "https://password-reset-backend-gz72.onrender.com/api/registration/getbyid",
        {
          headers: headers,
        }
      )
      .then((res) => stateValue([res.data.user]))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className="text-center" style={{ color: "red" }}>
        wellcome: Our Login Page
      </h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tokendata.map((data, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.userEmail}</td>
                </tr>
                ;
              </>
            );
          })}
        </tbody>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            navigation("/login");
          }}
        >
          Log out
        </Button>
      </Table>
    </>
  );
};

export default UserPage;
