import React, { FC } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import TasksPage from '../../pages/tasks/TasksPage';
import ReportsPage from '../../pages/reportsPage/ReportsPage';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

const Header: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <NavbarBrand>Laguna</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="text-decoration-none me-2">
                  Tracker
                </Link>
                <Link className="text-decoration-none" to="/reports">
                  Reports
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/reports">
            <ReportsPage />
          </Route>
          <Route path="/">
            <TasksPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Header;
