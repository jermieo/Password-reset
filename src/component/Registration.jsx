import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Form field
const Registration = () => {
  const obj = {
    firstName: "",
    lastName: "",
    userEmail: "",
    password: "",
    conformPassword: "",
  };
  const [formValue, stateValue] = useState(obj);
  const navigation = useNavigate();
  // input field chanhe event
  const handelChangeEvent = (e) => {
    const { name, value, checked } = e.target;
    stateValue({ ...formValue, [name]: value, checked });
  };
  // submit Form
  const handelSubmit = (e) => {
    e.preventDefault();
    const {
      password,
      conformPassword,
      checked,
      firstName,
      lastName,
      userEmail,
    } = formValue;
    if (password !== conformPassword) {
      toast.error("Please enter the same Password", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (firstName == "") {
      toast.error("Please enter firstName ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (lastName == "") {
      toast.error("Please enter lastName ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (userEmail == "") {
      toast.error("Please enter userEmail ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (password == "") {
      toast.error("Please enter password", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (conformPassword == "") {
      toast.error("Please enter conform Password", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (checked == false) {
      toast.error("Please check all information", {
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
        "https://password-reset-backend-gz72.onrender.com/api/registration/create",
        formValue,
        {
          headers: headers,
        }
      )
      .then((res) => {
        if (res.status == 200) {
          navigation("/registerMessage");
        }
      })
      .catch((error) => {
        <ToastContainer />;
        toast.error(error.response.data.error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <>
      <Container className="container fw-bold">
        <h3 className="text-center">Registration Page</h3>
        <Row>
          <Col>
            <Form onSubmit={handelSubmit}>
              {/* Firstname */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-bold">FirstName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter FirstName"
                  name="firstName"
                  onChange={handelChangeEvent}
                  value={formValue.firstName}
                />
              </Form.Group>
              {/* LastName */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-bold">LastName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter LastName"
                  name="lastName"
                  onChange={handelChangeEvent}
                  value={formValue.lastName}
                />
              </Form.Group>
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="All the information truely agree"
                  onChange={handelChangeEvent}
                />
              </Form.Group>
              <div>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <ToastContainer />
              </div>
              <h4 style={{ color: "blue" }} className="text-center">
                Node: Compulsory you will fill the checkbox and all fields
              </h4>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Registration;
