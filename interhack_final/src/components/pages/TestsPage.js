import React, { Component } from 'react';
import { Button, Card, Col, Row, Input, Select, Table, Typography } from 'antd';
import InfoTitleCard from '../cards/InfoTitleCard';

const { Title } = Typography;
const { Option } = Select;

class TestsPage extends Component {
  render() {
    const dataSource = [
      {
        key: '1',
        name: 'Roberto Carlos',
        grade: 0,
      },
      {
        key: '2',
        name: 'Maria Carolina',
        grade: 0,
      },
      {
        key: '3',
        name: 'Lucas Generoso',
        grade: 0,
      },
      {
        key: '4',
        name: 'Mirian José',
        grade: 0,
      },
    ];

    const columns = [
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Nota',
        dataIndex: 'grade',
        render: grade => (
          <Input style={{width: '80px'}} text={grade} />
        ),
      }
    ];

    return (
      <React.Fragment>
        <Row>
          <Title level={3} style={{color:'#fff', zIndex: 10}}>Provas</Title>
          <InfoTitleCard
            title="Cadastrar Notas"
            width={650}
            height={900}
          >
            <p>Escolha a turma:</p>
            <Select defaultValue="6o Ano" style={{width: '275px'}}>
              <Option value="6o Ano">6o Ano</Option>
              <Option value="7o Ano">7o Ano</Option>
              <Option value="8o Ano">8o Ano</Option>
              <Option value="9o Ano">9o Ano</Option>
              <Option value="Ingles">Ingles</Option>
              <Option value="Espanhol">Espanhol</Option>
              <Option value="Matematica">Matematica</Option>
            </Select>

            <br/>
            <br/>

            <Col span={11} style={{marginRight: '30px'}}>
              <p style={{fontSize: '10pt'}}>Nome da Avaliação</p>
              <Input />
            </Col>

            <Col span={11}>
              <p style={{fontSize: '10pt'}}>Data de Aplicação</p>
              <Input />
            </Col>

            <p style={{fontSize: '10pt', marginTop: '100px'}}>Data de Aplicação</p>
            <Input />

            <br/>
            <br/>

            <Table dataSource={dataSource} columns={columns} />
            <br/>
            <Button style={{float: 'right'}} type="primary">Salvar</Button>
          </InfoTitleCard>
        </Row>
      </React.Fragment>
    );
  }
}

export default TestsPage;