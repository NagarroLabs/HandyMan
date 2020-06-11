import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import ExampleUsage from "./ExampleUsage";

import Form from 'react-bootstrap/Form';

import AuthRoutes from "./routes/AuthRoutes";
import NoAuthRoutes from "./routes/NoAuthRoutes";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import CustomNavbar from './components/CustomNavbar';

import "./index.css";

const App = () => {
  const { token, userId, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        userId,
        login,
        logout,
      }}
    >
      <Router>

        <div>
          <CustomNavbar />
        </div>

        <main>{token ? <AuthRoutes /> : <NoAuthRoutes />}</main>
      </Router>
    </AuthContext.Provider>
  );
};

              .btn-princ:active {
                top:1px;
                background-color: rgb(231, 155, 68); 
                }

              .btn-sec {
                background-color:#6D213C;
              }

              .btn-sec:active{
                top:1px;
                background-color: rgb(155, 46, 84);
               }

              .progress-bar{
                background-color: #E9810A;
                
              }

              `}
            </style> */}
            <div>
           <ExampleUsage />
          </div>
            <Button className="btn-princ" >
              Register
            </Button>
            <Button variant="sec" >
              Cancel
            </Button>
            <Button variant="link" >
              Link
            </Button>
            <a href="link" className="href">Link </a>
          </> <br /> <br />
          
            <ProgressBar now={now} label={`${now}%`} /> <br/> <br/>

            <Card style={{ width: '300px' }}>
              <Card.Img variant="top" src="https://picsum.photos/id/1/250/250" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="princ">Details</Button>
                  <Button variant="princ">Contact</Button>
                </Card.Body>
            </Card> <br/> <br/>

            

          <Form>
              <Form.Group controlId="formControlInput">
                      <Form.Label>Text Input: </Form.Label>
                      <Form.Control type="text" placeholder="Placeholder" size="large" />
              </Form.Group>
              <Form.Group controlId="formControlTextArea">
                      <Form.Label>TextArea: </Form.Label>
                      <Form.Control as="textarea" rows="4" placeholder="Placeholder" size="large" />
              </Form.Group>
              <Form.Group controlId="formControlSelect">
                      <Form.Label>Select:</Form.Label>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
              </Form.Group>
              <Form.Group controlId="formRange" className="formRange" >
                      <Form.Label>Range:</Form.Label>
                      <Form.Control type="range" custom/>
              </Form.Group>
              <Form.Group controlId="formCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <br />
              <Form.Group controlId="formControlRadio">
                  <Form.Label >
                      Radios:
                  </Form.Label>
                        <Form.Check
                            type="radio"
                            label="first radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="second radio"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                        <Form.Check
                          type="radio"
                          label="third radio"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios3"
                        />
                    
              </Form.Group>
           
          </Form>
          
          <br /><br />

        </div>

      </div>

    );
  }


export default App;
