import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { tocken } from "../features/logSlice";
const Login = () => {
  //   From field
  const obj = { userEmail: "", password: "" };
  const [formValue, stateValue] = useState(obj);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  //   Input field event change
  const handelChangeEvent = (e) => {
    const { name, value } = e.target;
    stateValue({ ...formValue, [name]: value });
  };
  //  input Form submit
  const handelSubmit = (e) => {
    e.preventDefault();
    postcall();
  };
  const headers = {
    "Content-Type": "application/json",
  };
  const postcall = async () => {
    await axios
      .post("http://localhost:4000/api/registration/login", formValue, {
        headers,
      })
      .then((res) => {
        if (res.status == 200) {
          dispatch(tocken(res.data));
          navigation("/userpage");
        } else {
          console.log("postcall in login error");
        }
      });
  };
  const handellinkepage = async () => {
    await axios
      .post("http://localhost:4000/api/registration/nodemailer/link", formValue)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Container className="container fw-bold">
        <h1 className="text-center">Login-Page</h1>
        <Row>
          <Col>
            <Form onSubmit={handelSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-bold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="userEmail"
                  onChange={handelChangeEvent}
                  value={formValue.userEmail}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handelChangeEvent}
                  value={formValue.password}
                />
              </Form.Group>
              <br></br>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div>-</div>
            <Button variant="primary" type="submit" onClick={handellinkepage}>
              reset password
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
