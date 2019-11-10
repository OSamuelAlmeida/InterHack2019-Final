import React, { Component } from 'react';
import { Layout } from 'antd';
import SideMenu from '../navigation/SideMenu';
import ContentContainer from '../content/ContentContainer';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import StudentsPage from '../pages/StudentsPage';
import TestsPage from '../pages/TestsPage';
import LearningTestPage from '../pages/LearningTestPage';
import AddStudentPage from '../pages/AddStudentPage';
import StudentDetailsPage from '../pages/StudentDetailsPage';
import Intro from '../pages/Intro';


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
              <Route path="/students/1" exact>
                  <StudentDetailsPage />
              </Route>
              <Route path="/add-student" exact>
                  <AddStudentPage />
              </Route>
              <Route path="/tests" exact>
                  <TestsPage />
              </Route>
              <Route path="/learning-test" exact>
                  <LearningTestPage />
              </Route>
              <Route path="/intro" exact>
                  <Intro />
              </Route>
          </Switch>
        </ContentContainer>
      </Layout>
    );
  }
}

export default MainTemplate;