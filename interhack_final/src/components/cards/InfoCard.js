import React, { Component } from 'react';
import { Avatar, Card } from 'antd';

const { Meta } = Card;


class InfoCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card style={{ width: this.props.width ? this.props.width : 300 }}>
          <Meta
            avatar={<Avatar src={this.props.image} />}
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