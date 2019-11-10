import React, { Component } from 'react';
import { Avatar, Button, Card, Col, Row, Icon, Input, Table, Typography } from 'antd';
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
        render: text => <p>{text}</p>,
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
            style={{ width: 500, borderRadius: '10px' }}
            cover={
              <img
                alt="example"
                style={{borderRadius: '10px'}}
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              avatar={<Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<h1 style={{fontSize: '14pt'}}>Roberto Carlos</h1>}
              description="Turma: 6o Ano"
            />
            <h4 style={{textAlign: 'center'}}>Tipo: Auditivo</h4>

            <br/>
            <br/>

            <h1 style={{textAlign: 'center'}}>Desempenho</h1>

            <Table dataSource={dataSource} columns={columns} />

            <p style={{textAlign: 'right'}}>Média aritmética: 6</p>

            <Chart height={400} data={dataSource} scale={cols} forceFit>
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