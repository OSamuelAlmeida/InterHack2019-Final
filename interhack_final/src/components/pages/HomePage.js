import React, { Component } from 'react';
import { Row, Col } from 'antd';
import InfoCard from '../cards/InfoCard';
import PieChartCard from '../cards/PieChartCard';
import BarChartCard from '../cards/BarChartCard';

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
        alunos: 3
      },
      {
        nota: 1,
        alunos: 3
      },
      {
        nota: 3,
        alunos: 4
      },
      {
        nota: 4,
        alunos: 7
      },
      {
        nota: 5,
        alunos: 8
      },
      {
        nota: 6,
        alunos: 10
      },
      {
        nota: 7,
        alunos: 25
      },
      {
        nota: 8,
        alunos: 5
      },
      {
        nota: 9,
        alunos: 15
      },
      {
        nota: 10,
        alunos: 10
      },
    ];

    const studentGrandesCols = {
      nota: {
        tickInterval: 10
      }
    };

    return (
      <React.Fragment>
        <Row>
          <Col span={7}>
            <InfoCard title="Quantidade de Alunos" width={270}>
              90
              <br/><br/><br/>
            </InfoCard>
          </Col>
          <Col span={7}>
            <InfoCard title="Média Geral" width={270}>
              7.8
              <br/><br/>
              +0.2 Desde o último mês
            </InfoCard>
          </Col>
        </Row>
        <Row>
          <Col span={15}>
            <PieChartCard
              title="Visão Geral"
              description="Aluno por Categoria"
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
              yColumn="alunos"
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default HomePage;