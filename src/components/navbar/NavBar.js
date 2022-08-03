import { useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import logo from "assets/images/logo.png";
import "./NavBar.css";
import { scroller } from "react-scroll/modules";
import { RegisterModel } from "components/RegisterModel";

export const NavBar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showMI, setShowMI] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const scroll = (props) =>
    scroller.scrollTo(props.menu, {
      smooth: true,
      offset: props.position,
      duration: 100,
      spy: true,
    });

  const handleClick = (props) => {
    if (window.innerWidth <= 991) {
      setExpanded(false);
      scroll(props);
    } else {
      props.position = -145;
      scroll(props);
    }
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        sticky="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="toggle"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => handleClick({ menu: "home", position: 0 })}
              >
                Home
              </Nav.Link>

              <NavDropdown
                title="About"
                id="collapsible-nav-dropdown"
                show={showAbout}
                onMouseEnter={(e) => setShowAbout(true)}
                onMouseLeave={(e) => setShowAbout(false)}
                onClick={() =>
                  showAbout ? setShowAbout(false) : setShowAbout(true)
                }
              >
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "vision", position: -580 })
                  }
                >
                  Vision
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "vision", position: -580 })
                  }
                >
                  Mission
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "management", position: -580 })
                  }
                >
                  Management
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "faculties", position: -580 })
                  }
                >
                  Faculties
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Courses"
                id="collapsible-nav-dropdown"
                show={showCourses}
                onMouseEnter={(e) => setShowCourses(true)}
                onMouseLeave={(e) => setShowCourses(false)}
                onClick={() =>
                  showCourses ? setShowCourses(false) : setShowCourses(true)
                }
              >
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "courses", position: -650 })
                  }
                >
                  Artificial Intelligence
                </NavDropdown.Item>
                <NavDropdown
                  title="Machine Learning"
                  className="navbar-right"
                  id="collapsible-nav-dropdown"
                  show={showMI}
                  onMouseEnter={(e) => setShowMI(true)}
                  onMouseLeave={(e) => setShowMI(false)}
                  onClick={() => (showMI ? setShowMI(false) : setShowMI(true))}
                >
                  <NavDropdown.Item
                    onClick={() =>
                      handleClick({ menu: "courses", position: -650 })
                    }
                  >
                    Diploma in Machine Learning
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() =>
                      handleClick({ menu: "courses", position: -650 })
                    }
                  >
                    Diploma in Machine Learning
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "courses", position: -650 })
                  }
                >
                  Python
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "courses", position: -650 })
                  }
                >
                  Data Analytics
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "courses", position: -650 })
                  }
                >
                  Big Data
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    handleClick({ menu: "courses", position: -650 })
                  }
                >
                  Business Intelligence
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                onClick={() => handleClick({ menu: "blogs", position: -650 })}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                onClick={() => handleClick({ menu: "clients", position: -650 })}
              >
                Clients
              </Nav.Link>
              <Nav.Link
                onClick={() =>
                  handleClick({ menu: "contactUs", position: -350 })
                }
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setModalShow(true);
                  setExpanded(false);
                }}
              >
                Register
              </Nav.Link>
              <RegisterModel
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              {/* <Link to="bi" smooth={true} duration={500}>
                                <NavDropdown.Item href="bi">Business Intelligence</NavDropdown.Item>
                            </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
