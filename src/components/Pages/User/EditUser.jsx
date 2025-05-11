import { useState, useEffect } from "react";
import * as userService from "../../../services/user.service.js";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../Layout/Layout.jsx";

const EditUser = () => {
  const { userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const updateUser = async () => {
    try {
      const user = await userService.retrieveUser(userId);
      setName(user.name);
      setEmail(user.email);
      setCity(user.city);
      setCountry(user.country);
    } catch (error) {
      console.log(error.message);
      toast.error(`User ${userId} cannot be found.`);
    }
  };

  useEffect(() => {
    updateUser();
  }, [userId]);

  const submitForm = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };

    try {
      const response = await userService.editUser(userId, payload);
      if (response?.status) {
        toast.success(`User ${userId} successfully updated!`);
      } else {
        toast.warn("User could not be updated, please contact devs");
      }
    } catch (error) {
      const message =
        error?.response?.data?.errors?.body?.[0]?.message ||
        "An unexpected error occurred.";
      toast.error(message[0].toUpperCase() + message.substring(1));
      console.log(error.message);
    }
  };

  return (
    <Layout>
      <h3 className="text-center">Edit User</h3>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={country}
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" onClick={submitForm} className="m-1">
                Update
              </Button>
              <Button variant="danger" as={NavLink} to={`/delete/${userId}`} className="m-1">
                Delete
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default EditUser;
