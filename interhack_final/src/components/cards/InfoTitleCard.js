import React, { Component } from 'react';
import { Avatar, Card } from 'antd';

const { Meta } = Card;


class InfoTitleCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card title={this.props.title} extra={this.props.extra} style={{ width: this.props.width ? this.props.width : 300, borderRadius: '10px', height: this.props.height, margin: this.props.margin }}>
            {this.props.children}
        </Card>
      </React.Fragment>
    );
  }
}

export default InfoTitleCard;