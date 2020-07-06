import React from 'react';
import ArticlePage from './components/articles/ArticlePage';
import Header from './components/headers/HeaderComponent';
import Sidebar from './components/headers/SidebarComponent';
import { Container, Row, Col } from 'reactstrap';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Container className="themed-container" fluid={true}>
        <Row>
          <Col xs="9">
            <ArticlePage />
          </Col>
          <Col xs="3">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
