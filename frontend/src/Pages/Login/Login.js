
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";



function Login({ history }) {


  const loginContainer = {
  display: "flex",
  flexDirection: "column",
  margin: "20px"
}

  return (
    <MainScreen title="LOGIN">
      <div className={loginContainer}>
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
        {/* {loading && <Loading />} */}
        <Form >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value=""
              placeholder="Enter email"
              
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value=""
              placeholder="Password"
             
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default Login;