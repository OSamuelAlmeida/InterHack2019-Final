import React, { Component } from 'react';
import { Button, Card, Col, Row, Input, Radio, Typography } from 'antd';
import InfoTitleCard from '../cards/InfoTitleCard';

const { Title } = Typography;

class LearningTestPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Title level={3} style={{color:'#fff', zIndex: 10}}>Teste de Aprendizagem</Title>
          <InfoTitleCard
            title="Questões"
            width={650}
            height={450}
          >
            <p>Você prefere ler livros a assistir filmes?</p>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Você sempre preferiu realizar atividades criativas (arte, pintura, música) a teorias matemáticas?</p>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Números te fascinam?</p>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>


            <br/>
            <br/>

            <br/>
            <Button style={{float: 'right'}} type="primary">Salvar</Button>
          </InfoTitleCard>
        </Row>
      </React.Fragment>
    );
  }
}

export default LearningTestPage;