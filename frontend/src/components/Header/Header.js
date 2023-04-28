import {Navbar,Container,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
           
              <Form >
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  
                />
              </Form>
           
          </Nav>
          <Nav>
            
              <>
                <Link  to="/mynotes">My Notes</Link>
                <NavDropdown
                  title="vaibhav"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            {/* ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            ) */}
          </Nav>
        </Navbar.Collapse>
       </Container>
    </Navbar>
      
   
  )
}

export default Header;