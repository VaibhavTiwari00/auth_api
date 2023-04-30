
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Formik} from "formik"

import MainScreen from "../../components/MainScreen";
import "../../assets/css/RegisterScreen.css";

const Register = ({ history }) => {
  

 
  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        
        <Formik initialValues={{ email: '', name: '',password:'',confirmPassword: '',}}>
          { 
            ({values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,}) => (
              <Form onSubmit={handleSubmit}>
                {console.log(values)}
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"name="name"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                    type="email"
                    name="email"
              placeholder="Enter email"
              onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
             name="confirmPassword"onChange={handleChange}
             onBlur={handleBlur}
             value={values.confirmPassword}
            />
          </Form.Group>

          
          

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Register
          </Button>
        </Form>
            )
          
          }
          
       </Formik>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default Register;