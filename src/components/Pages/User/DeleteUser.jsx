import Layout from "../../Layout/Layout";
import * as userService from "../../../services/user.service.js";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Row } from "react-bootstrap";

const DeleteUser = () => {
  const { userId } = useParams();

  const submitAction = async () => {
    try {
      const response = await userService.deleteUser(userId);
      if (response?.status) {
        toast.success("User successfully removed");

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        toast.warn("User couldn't be removed!");
      }
    } catch (error) {
      toast.error("Unexpected Error!");
      console.log(error.message);
    }
  };
  const cancelAction = () => {
    window.location.href = "/";
  };
  return (
    <Layout>
      <h3 className="text-center">Remove this user ?</h3>
      <Row className="justify-content-center m-4">
            <Button variant="danger" onClick={submitAction} className="m-2">
              Confirm Delete User
            </Button>
            <Button variant="secondary" onClick={cancelAction} className="m-2">
              I changed my mind!
            </Button>
      </Row>
    </Layout>
  );
};

export default DeleteUser;
