import React, { Component } from 'react';
import { Avatar, Layout, Icon, Input } from 'antd';

const { Header, Content } = Layout;
const { Search } = Input;

class ContentContainer extends Component {
  render() {
    return (
      <Layout id="content-container">
        <Header style={{ padding: 0 }}>
          <Icon
            className="trigger"
            style={{color: 'white'}}
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.toggleMenu}
          />
          <Search
            placeholder="Procurar"
            style={{ width: 250, backgroundColor: '#F7FAFC' }}
          />
          <Icon style={{fontSize: '18px', marginLeft: '650px', paddingRight: '20px', color: 'white'}} type="bell" />
          <Avatar size="large" icon="user" /><span style={{paddingLeft: '10px', color: 'white'}} span>Professor</span>
        </Header>
        <Content id="content-card"
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default ContentContainer;