import React, { Component } from 'react';
import { Avatar, Button, Card, Col, Row, Icon, Input, Table, Typography, Badge } from 'antd';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

const { Title } = Typography;
const { Meta } = Card;

class StudentDetailsPage extends Component {
  render() {
    const dataSource = [
      {
        key: '1',
        name: 'P1',
        grade: 4,
        date: '11/09/2019',
        type: 'Visual'
      },
      {
        key: '2',
        name: 'P2',
        grade: 8,
        date: '20/10/2019',
        type: 'Auditivo'
      },
    ];

    const columns = [
      {
        title: 'Prova',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Data de Aplicação',
        dataIndex: 'date',
        key: 'date',
      },
            {
        title: 'Método',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Nota',
        dataIndex: 'grade',
        key: 'grade',
        render: (text) => (<p> <Badge status={text > 5 ? 'success' : 'error'} /> <a>{text}</a> </p>),
      }
    ];

    const cols = {
      name: {
        min: 0
      },
      grade: {
        min: 0
      }
    };

    return (
      <React.Fragment>
        <Row>
          <Title level={3} style={{color:'#fff', zIndex: 10}}>Detalhes do Aluno</Title>
          <Card
            style={{ width: 700, borderRadius: '10px', 'border': '0px' }}
            cover={
              <div style={{width: '700px', height: '200px', backgroundColor: '#7eafe1', position: 'absolute', borderRadius: '10px 10px 0 0'}}></div>
            }
          >

            <div style={{width: '700px', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '85px'}}>
                <div style={{width: '150', display: 'flex', flexDirection: 'column'}}>

                    <Avatar size={150} style={{backgroundColor: '#fff'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <h4 style={{textAlign: 'center', fontSize: '25px', color: '#172B4D', marginTop: '20px', marginBottom: '0px'}}>Roberto Carlos</h4>
                    <h4 style={{textAlign: 'center', fontSize: '15px', color: '#748094', marginTop: '5px', marginBottom: '0px'}}>6º Ano</h4>
                    <h4 style={{textAlign: 'center', fontSize: '13px', color: '#172B4D', marginTop: '5px', fontWeight: 'bold'}}>Auditivo</h4>

                    <h1 style={{textAlign: 'center', fontSize: '20px', color: '#172B4D', fontWeight: 'bold', marginTop: '20px'}}>Desempenho</h1>

                </div>
            </div>

            <Table dataSource={dataSource} columns={columns} />

            <p style={{textAlign: 'right'}}>Média aritmética: <b>6</b></p>

            <Chart height={400} style={{marginTop: '30px'}} data={dataSource} scale={cols} forceFit>
              <Axis name="name" />
              <Axis name="grade" />
              <Tooltip
                crosshairs={{
                  type: "y"
                }}
              />
              <Geom type="line" position="name*grade" size={2} />
              <Geom
                type="point"
                position="name*grade"
                size={4}
                shape={"circle"}
                style={{
                  stroke: "#fff",
                  lineWidth: 1
                }}
              />
            </Chart>
          </Card>
      </Row>
      </React.Fragment>
    );
  }
}

export default StudentDetailsPage;