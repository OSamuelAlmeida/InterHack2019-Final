import React, { Component } from 'react';
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
import DataSet from "@antv/data-set";
import InfoCard from './InfoCard';

const { DataView } = DataSet;

class PieChartCard extends Component {
  render() {
    const dv = new DataView();
    dv.source(this.props.data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = (val * 100).toFixed(2) + "%";
          return val;
        }
      }
    };

    return (
      <React.Fragment>
        <InfoCard
          title={this.props.title}
          description={this.props.description}
          image={this.props.image}
          width={this.props.width}
        >
          <Chart
            data={dv}
            scale={cols}
            padding={[80, 100, 80, 80]}
            forceFit
          >
            <Coord type="theta" radius={0.75} />
            <Axis name="percent" />
            <Legend
                position="right"
                offsetX={-100}
            />
            <Tooltip
                showTitle={false}
                itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Geom
                type="intervalStack"
                position="percent"
                color="item"
                tooltip={[
                "item*percent",
                (item, percent) => {
                    percent = percent * 100 + "%";
                    return {
                    name: item,
                    value: percent
                    };
                }
                ]}
                style={{
                lineWidth: 1,
                stroke: "#fff"
                }}
            >
                <Label
                content="percent"
                offset={-40}
                textStyle={{
                    rotate: 0,
                    textAlign: "center",
                    shadowBlur: 2,
                    shadowColor: "rgba(0, 0, 0, .45)"
                }}
                />
            </Geom>
          </Chart>
        </InfoCard>
      </React.Fragment>
    );
  }
}

export default PieChartCard;