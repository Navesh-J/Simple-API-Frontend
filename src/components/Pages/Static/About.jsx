import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="text-center m-4">You are being redirected!</div>
      <div className="text-center m-4">
        <a href="https://navesh.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Button variant="danger" className="m-2">
            CONFIRM
          </Button>
        </a>
        <NavLink to="/">
          <Button variant="secondary" className="m-2">
            No,Take me back!
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default About;
