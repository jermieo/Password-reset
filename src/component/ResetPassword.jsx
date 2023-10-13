import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ResetPassword = () => {
  const obj = { password: "", conformPassword: "", userEmail: "" };
  const [formValue, stateValue] = useState(obj);
  const navigation = useNavigate();

  const handelChangeEvent = (e) => {
    const { name, value } = e.target;
    stateValue({ ...formValue, [name]: value });
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    const { password, conformPassword, userEmail } = formValue;
    if (password !== conformPassword) {
      toast.error("Please enter the same Password", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (userEmail == "") {
      toast.error("Please enter the email", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      Postcall();
    }
  };
  const Postcall = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT fefege...",
    };
    await axios
      .post(
        "https://password-reset-backend-gz72.onrender.com/api/registration/reset/password",
        formValue,
        {
          headers: headers,
        }
      )
      .then((res) => {
        if (res.status == 200) {
          navigation("/login");
        }
      })
      .catch((error) => {
        <ToastContainer />;
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <div>
      <Container className="container fw-bold">
        <h1 className="text-center">Reset-Password</h1>
        <Row>
          <Col>
            <Form onSubmit={handelsubmit}>
              {/* Email */}
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
              {/* Password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handelChangeEvent}
                  value={formValue.password}
                />
              </Form.Group>
              {/* Conform Password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Conform Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter ConformPassword"
                  name="conformPassword"
                  onChange={handelChangeEvent}
                  value={formValue.conformPassword}
                />
              </Form.Group>
              <br></br>
              <div>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <ToastContainer />
              </div>
              <div style={{ color: "blue" }} className="mx-5">
                <h4>Note: if you can't submit pls check email</h4>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
