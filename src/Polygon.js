import React from "react";
import styled, { keyframes } from "styled-components";

console.log(`${props => props.colour}`);

const blend = keyframes`
  from {
    background: hsl(192, 100%, ${props => props.colour}%);
  }
  to {
    background: hsl(192, 100%, 10%);
  }
`;

const PolygonWrapper = styled.span`
  float: left;
`;

const PolygonShape = styled.div`
  clip-path: ${props =>
    props.position === "down"
      ? "polygon(0% 0%,100% 0%,50% 100%)"
      : "polygon(50% 0%, 0% 100%, 100% 100%)"};
  height: 70px;
  width: 70px;
  margin: 0 0 0 -36px;
  background: hsl(192, 100%, ${props => props.colour}%);
  animation: ${blend} ${props => props.delay}s linear infinite alternate;
`;

class Polygon extends React.Component {
  render() {
    return (
      <PolygonWrapper>
        <PolygonShape
          position={this.props.position}
          colour={this.props.colour}
          delay={this.props.delay}
        />
      </PolygonWrapper>
    );
  }
}

export default Polygon;
