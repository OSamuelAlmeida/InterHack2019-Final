import React, { Component } from 'react';
import { Avatar, Card } from 'antd';

import './infocard.css';

const { Meta } = Card;


class InfoCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card style={{ width: this.props.width ? this.props.width : 300, borderRadius: '10px', height: this.props.height, margin: this.props.margin }}>
          <Meta
            avatar={this.props.image ? <Avatar src={this.props.image} /> : null}
            title={this.props.title}
            description={this.props.description}
          />
            {this.props.children}
        </Card>
      </React.Fragment>
    );
  }
}

export default InfoCard;