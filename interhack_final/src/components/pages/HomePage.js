import React, { Component } from 'react';
import { Row, Col, Typography  } from 'antd';
import InfoCard from '../cards/InfoCard';
import PieChartCard from '../cards/PieChartCard';
import BarChartCard from '../cards/BarChartCard';
import InfoTitleCard from '../cards/InfoTitleCard';

import './home.css';

class HomePage extends Component {
  render() {
    const studentsByCategoryData =[
      {
        item: "Visual",
        count: 30
      },
      {
        item: "Auditório",
        count: 40
      },
      {
        item: "Cinestésico",
        count: 20
      }
    ];

    const studentGradesData = [
      {
        nota: 1,
        Alunos: 3
      },
      {
        nota: 1,
        Alunos: 3
      },
      {
        nota: 3,
        Alunos: 4
      },
      {
        nota: 4,
        Alunos: 7
      },
      {
        nota: 5,
        Alunos: 8
      },
      {
        nota: 6,
        Alunos: 10
      },
      {
        nota: 7,
        Alunos: 25
      },
      {
        nota: 8,
        Alunos: 5
      },
      {
        nota: 9,
        Alunos: 15
      },
      {
        nota: 10,
        Alunos: 10
      },
    ];

    const studentGrandesCols = {
      nota: {
        tickInterval: 10
      }
    };

    const { Title } = Typography;

    return (
      <React.Fragment>
        <Row style={{marginBottom:'0px'}}>
            <Title level={3} style={{color:'#fff', zIndex: 10}}>Início</Title>
            <Col span={7}>
                <InfoCard title="Quantidade de Alunos" width={250} height={120} image="https://image.flaticon.com/icons/svg/33/33308.svg">
                    90
                    <br/><br/><br/>
                </InfoCard>
            </Col>

            <Col span={7}>
                <InfoCard title="Média Geral" width={250} height={120} image="https://image.flaticon.com/icons/svg/1170/1170667.svg">
                    7.8
                    <p><span style={{color: '#80ff59'}}>+0.2</span> Desde o último mês</p>
                </InfoCard>
            </Col>
        </Row>

        <br/>
        <br/>
        <br/>

        <Row>
          <Col span={15}>
            <PieChartCard
              title="Visão Geral"
              description="Alunos por Categoria"
              text="Alunos"
              count={90}
              width={600}
              data={studentsByCategoryData}
            />
          </Col>
          <Col span={5}>
            <BarChartCard
              title="Performance"
              description="Notas Gerais"
              width={400}
              data={studentGradesData}
              cols={studentGrandesCols}
              xColumn="nota"
              yColumn="Alunos"
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default HomePage;