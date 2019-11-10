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
import InfoCard from './InfoCard';

class BarChartCard extends Component {
  render() {
    return (
      <React.Fragment>
        <InfoCard
          title={this.props.title}
          description={this.props.description}
          image={this.props.image}
          width={this.props.width}
        >
          <Chart height={400} data={this.props.data} scale={this.props.cols} forceFit>
            <Axis name={this.props.xColumn} />
            <Axis name={this.props.yColumn} />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom type="interval" position={this.props.xColumn + "*" + this.props.yColumn} />
          </Chart>
        </InfoCard>
      </React.Fragment>
    );
  }
}

export default BarChartCard;