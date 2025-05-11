import React, { useState } from "react";
import {Row, Col, Form,Button } from "react-bootstrap";
import { toast } from "react-toastify";
import * as userService from '../../../services/user.service.js'
import Layout from "../../Layout/Layout.jsx";

const CreateUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };

    try {
      const apiResponse = await userService.createUser(payload);
      console.log(apiResponse);

      if (apiResponse?.status) {
        const getUserId = apiResponse?.user?.id;
        toast.success(`User ${getUserId} Successfully Created !`)

        setName('');
        setEmail('');
        setCity('');
        setCountry('');

      } else {
        toast.warn('An error has occurred.')
      }
    } catch (error) {
        const {data:{errors:{body}}} = error.response;
        const message = body[0]?.message;
        toast.error(message[0].toUpperCase()+message.substring(1)); 
        console.log(error.message );
    }
  };

  return (
    <Layout>
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
            <Button variant="primary" type=" submit" onClick={submitForm}>
              Add User
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateUser;