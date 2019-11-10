import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card, Col, Divider, Icon, Row, Select, Typography } from 'antd';
import InfoTitleCard from '../cards/InfoTitleCard';
import PieChartCard from '../cards/PieChartCard';
import StudentCard from '../cards/StudentCard';

import  './StudentsPage.css';

const { Option } = Select;
const { Meta } = Card;
const { Title } = Typography;

class StudentsPage extends Component {
  render() {
    const studentsByCategoryData =[
      {
        item: "Visual",
        count: 10
      },
      {
        item: "Auditório",
        count: 5
      },
      {
        item: "Cinestésico",
        count: 8
      }
    ];

    return (
      <React.Fragment>
        <Row>
          <Title level={3} style={{color:'#fff', zIndex: 10}}>Alunos</Title>
          <Col span={9} className="shit">
            <InfoTitleCard
              title="Alunos do 6º Ano"
              extra={<small>Média da Turma: <span style={{fontWeight: 'bold'}}>8</span></small>}
              width={330}
            >
              <Link to="add-student">
                <Card bordered={false} style={{ width: 300 }}>
                  <Meta
                    avatar={<Icon style={{fontSize: '30px'}} type="user-add" />}
                    title={<h1>Adicionar aluno</h1>}
                  />
                </Card>
              </Link>
              <Divider />
              <StudentCard
                name="Roberto Carlos"
                type="Auditivo"
                image="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                linkTo="students/1"
                status="success"
              />
              <StudentCard
                name="Maria Carolina"
                type="Visual"
                linkTo="students/2"
                status="success"
              />
              <StudentCard
                name="Lucas Generoso"
                type="Cinestésico"
                linkTo="students/3"
                status="error"
              />
              <StudentCard
                name="Mirian José"
                type="Visual"
                linkTo="students/4"
                status="warning"
              />

            </InfoTitleCard>
          </Col>
          <Col span={9}>
              <InfoTitleCard
                title="Definir Parâmetros"
                width={600}
              >
                <p>Escolha a turma:</p>
                <Select defaultValue="6o Ano" style={{width: '320px'}}>
                  <Option value="6o Ano">6o Ano</Option>
                  <Option value="7o Ano">7o Ano</Option>
                  <Option value="8o Ano">8o Ano</Option>
                  <Option value="9o Ano">9o Ano</Option>
                  <Option value="Ingles">Ingles</Option>
                  <Option value="Espanhol">Espanhol</Option>
                  <Option value="Matematica">Matematica</Option>
                </Select>
            </InfoTitleCard>

            <br/>
            <br/>

            <PieChartCard
              title="Visão Geral"
              description="Alunos por Categoria"
              text="Alunos"
              count={23}
              width={600}
              data={studentsByCategoryData}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default StudentsPage;