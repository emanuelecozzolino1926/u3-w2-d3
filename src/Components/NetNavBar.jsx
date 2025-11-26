import { Navbar, Nav, Container } from "react-bootstrap";

const NetNavBar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        style={{ backgroundColor: "#221f1f !important" }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="/logo.png"
              style={{ width: "100px", height: "55px" }}
              alt="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarSupportedContent" />

          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link className="active" href="#">
                Home
              </Nav.Link>
              <Nav.Link href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold ms-2">
                KIDS
              </div>
              <i className="bi bi-bell icons ms-3"></i>
              <i className="bi bi-person-circle icons ms-3"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NetNavBar;
