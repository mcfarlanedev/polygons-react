import React from "react";
import ReactDOM from "react-dom";
import Polygon from "./Polygon";
import styled, { keyframes } from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { throws } from "assert";

const PolygonGridWrapper = styled.div`
  display: block;
  width: 3919px;
  // animation: slide 10s linear infinite;
}
`;

class PolygonGrid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = React.createRef();
  }
  state = {
    polygons: []
  };
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  componentDidMount() {
    console.log(this.grid.current.offsetWidth);
    this.renderPolygons(400);
  }
  renderPolygons(polygonsToGenerate) {
    let polygons = [];
    for (var index = 0; index < polygonsToGenerate; index++) {
      polygons.push(
        <Polygon
          key={`polygon-${index}`}
          colour={this.getRandomInt(10, 50)}
          delay={this.getRandomInt(3, 10)}
          position={index % 2 ? "down" : "up"}
        />
      );
    }
    this.setState({
      polygons: polygons
    });
  }
  render() {
    return (
      <PolygonGridWrapper ref={this.grid}>
        {this.state.polygons}
      </PolygonGridWrapper>
    );
  }
}

export default PolygonGrid;
