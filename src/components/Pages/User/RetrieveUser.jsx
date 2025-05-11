import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import * as userService from '../../../services/user.service.js'
import Layout from "../../Layout/Layout";

const RetrieveUser = () => {
  const { userId } = useParams();
  const getUserEndpoint = `http://localhost:5000/v1/user/${userId}`;

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const apiResponse = await userService.retrieveUser(userId);
      setUser(apiResponse);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  return (
    <Layout>
      {user ? (
        <Row className="justify-content-center">
          <Col lg={4}>
            <h3 className="text-center mb-3">{user.name}</h3>
            <Card border="primary">
              <Card.Body className="text-center">
                <p>{user.email}</p>
                {user.city && user.country && (
                  <p>
                    {user.city} - {user.country}
                  </p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <div className="text-center text-danger font-bold">User Cannot be found!</div>
      )}
    </Layout>
  );
};

export default RetrieveUser;
