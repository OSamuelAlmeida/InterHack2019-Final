import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class SideMenu extends Component {
  render() {
    return (
      <Sider theme="light" trigger={null} className="sider" collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
                <Icon type="home" />
                <span>Início</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/students">
                <Icon type="team" />
                <span>Alunos</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/tests">
                <Icon type="solution" />
                <span>Provas</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/learning-test">
                <Icon type="select" />
                <span>Teste de Aluno</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideMenu;