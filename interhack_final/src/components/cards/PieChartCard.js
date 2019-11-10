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
const { Html } = Guide;

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
            <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
            <Axis name="percent" />
            <Legend
                position="right"
                offsetX={-100}
            />
            <Tooltip
                showTitle={false}
                itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Guide>
                <Html
                position={["50%", "50%"]}
                html={"<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>" + this.props.text + "<br><span style=&quot;color:#262626;font-size:2.5em&quot;>" + this.props.count + "</span></div>"}
                alignX="middle"
                alignY="middle"
                />
            </Guide>
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
                formatter={(val, item) => {
                    return item.point.item + ": " + val;
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