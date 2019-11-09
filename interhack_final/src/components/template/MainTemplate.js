import React, { Component } from 'react';
import { Layout } from 'antd';
import SideMenu from '../navigation/SideMenu';
import ContentContainer from '../content/ContentContainer';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import StudentsPage from '../pages/StudentsPage';
import TestsPage from '../pages/TestsPage';
import LearningTestPage from '../pages/LearningTestPage';

class MainTemplate extends Component {
  state = {
    collapsed: false
  }

  toggleMenu = () => {
    this.setState({
      ...this.state,
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout id="layout">
        <SideMenu collapsed={this.state.collapsed} />
        <ContentContainer collapsed={this.state.collapsed} toggleMenu={this.toggleMenu}>
          <Switch>
              <Route path="/" exact>
                  <HomePage />
              </Route>
              <Route path="/students" exact>
                  <StudentsPage />
              </Route>
              <Route path="/tests" exact>
                  <TestsPage />
              </Route>
              <Route path="/learning-test" exact>
                  <LearningTestPage />
              </Route>
          </Switch>
        </ContentContainer>
      </Layout>
    );
  }
}

export default MainTemplate;