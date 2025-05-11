import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import * as userService from "../../../services/user.service.js";
import Layout from "../../Layout/Layout.jsx";
import { NavLink } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      // sleep for 4s to check the Spinner loader
      // await new Promise(r => setTimeout(r, 4000));
      const res = await userService.retrieveAllUsers();
      setUsers(res);
      setIsLoading(false)
    } catch (error) {
      const retrieveErrorMessage = () => {
        const message = error?.response?.data?.message;
        return message ?? 'Error while connecting to the server';
      };
      setErrorMessage(retrieveErrorMessage());
    }finally{
        setIsLoading(false);
      }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="grow" />
          <p>Loading...</p>
        </div>
      ):
      errorMessage ? (
        <h3 className="text-center text-danger fw-bold">{errorMessage}</h3>
      ) : (
        <>
          <h3 className="text-center mb-3">Users</h3>
          <Row className="justify-content-center">
          {Object.values(users).map((user) => (
              <Col lg={4} key={user.id} className="p-2">
                <Card border="primary">
                  <Card.Body>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    {user.city && user.country && (
                      <p>
                        {user.city} - {user.country}
                      </p>
                    )}
                    <Button
                      variant="primary"
                      as={NavLink}
                      to={`/update/${user.id}`}
                    >
                      Edit User
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
          ))}
          </Row>
        </>
      )}
    </Layout>
  );
};

export default UsersList;
