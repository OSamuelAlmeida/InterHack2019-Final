import React, { Component } from 'react';
import { Button, Card, Col, Row, Icon, Input, Select, Table, Typography } from 'antd';
import InfoTitleCard from '../cards/InfoTitleCard';

const { Title } = Typography;
const { Option } = Select;

class TestsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Title level={3} style={{color:'#fff', zIndex: 10}}>Cadastro de Aluno</Title>
          <InfoTitleCard
            title="Cadastrar Aluno"
            width={650}
          >
            <Row>
              <Col span={11} style={{marginRight: '30px'}}>
                  <p style={{fontSize: '10pt'}}>Escolher a Turma</p>
                  <Select defaultValue="6o Ano" style={{width: '250px'}}>
                      <Option value="6o Ano">6o Ano</Option>
                      <Option value="7o Ano">7o Ano</Option>
                      <Option value="8o Ano">8o Ano</Option>
                      <Option value="9o Ano">9o Ano</Option>
                      <Option value="Ingles">Ingles</Option>
                      <Option value="Espanhol">Espanhol</Option>
                      <Option value="Matematica">Matematica</Option>
                  </Select>
              </Col>

              <Col span={11}>
                <p style={{fontSize: '10pt'}}>Escolher Imagem</p>
                <Button>
                  <Icon type="upload" />Selecionar imagem...
                </Button>
              </Col>
            </Row>

            <br/>

            <Row>
              <Col span={11} style={{marginRight: '30px'}}>
                <p style={{fontSize: '10pt'}}>Nome Completo</p>
                <Input />
              </Col>

                <Col span={11}>
                  <p style={{fontSize: '10pt'}}>Tipo de Aprendizado</p>
                  <Select defaultValue="Auditivo" style={{width: '250px'}}>
                    <Option value="Auditivo">Auditivo</Option>
                    <Option value="Cinestesico">Cinestésico</Option>
                    <Option value="Visual">Visual</Option>
                  </Select>
              </Col>

              <br/>
              <br/>
            </Row>
            <Button style={{marginLeft: '500px'}} type="primary">Salvar</Button>
          </InfoTitleCard>
      </Row>
      </React.Fragment>
    );
  }
}

export default TestsPage;