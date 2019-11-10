import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card, Divider, Icon } from 'antd';

const { Meta } = Card;

class StudentCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to={this.props.linkTo}>
          <Card bordered={false} style={{ width: 300}}>
            <Meta
              avatar={<Avatar src={this.props.image} />}
              title={<h1 style={{fontSize: '12pt'}}>{this.props.name}</h1>}
              description={
                <h3 style={{
                  fontSize: '10pt'
                }}>Tipo: <span style={{fontWeight: 'bold'}}>{this.props.type}</span></h3>
              }
            />
          </Card>
        </Link>
        <Divider />
      </React.Fragment>
    );
  }
}

export default StudentCard;