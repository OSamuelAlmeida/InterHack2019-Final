import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card, Divider, Icon, Badge } from 'antd';

const { Meta } = Card;

class StudentCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to={this.props.linkTo}>
          <Card bordered={false} style={{ width: 300}}>
            <div style={{width: '300px', height: '100%', display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '200px', height: '100%'}}>
                    <Meta
                    avatar={<Avatar src={this.props.image} />}
                    title={<h1 style={{fontSize: '12pt'}}>{this.props.name}</h1>}
                    description={
                        <h3 style={{
                        fontSize: '10pt'
                        }}>Tipo: <span style={{fontWeight: 'bold'}}>{this.props.type}</span></h3>
                    }
                    />
                </div>
                <div style={{width: '50px', height: '72px'}}>

                    <Badge status={this.props.status} style={{float:'right'}} />

                </div>
            </div>
          </Card>
        </Link>
        <Divider />
      </React.Fragment>
    );
  }
}

export default StudentCard;