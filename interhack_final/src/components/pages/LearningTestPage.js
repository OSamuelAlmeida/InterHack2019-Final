import React, { Component } from 'react';
import { Button, Card, Col, Row, Input, Radio, Typography } from 'antd';
import InfoTitleCard from '../cards/InfoTitleCard';

import './learningtest.css'

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
            height={1100}
          >
            <p>Você prefere ler livros a assistir filmes?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Você sempre preferiu realizar atividades criativas (arte, pintura, música) a teorias matemáticas?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Te incomoda quando você faz uma prova com muitos textos grandes ?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Números te fascinam?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>


            <br/>
            <br/>

            <p>Você costuma ouvir podcasts com frequência ?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>É comum você explicar as matérias para os amigos com demonstrações e rascunhos ?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Você gosta das aulas que são totalmente teóricas ?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Você costuma memorizar textos vistos no cotidiano ?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Só de ouvir os comentários do professor, você já consegue discutir sobre o assunto?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <p>Resumos das matérias são uma especialidade sua ?</p>
            <Radio.Group name="radiogroup" defaultValue={3}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>

            <br/>
            <br/>

            <br/>
            <Button style={{backgroundColor:'#172B4D', borderColor: '#172B4D', color:'#ffffff', width: '160px', height: '40px', float: 'right'}} type="primary">Testar</Button>
          </InfoTitleCard>
        </Row>
      </React.Fragment>
    );
  }
}

export default LearningTestPage;