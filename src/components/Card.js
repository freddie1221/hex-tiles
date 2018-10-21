import React, { Component } from 'react';

class Card extends Component {

  componentDidMount() {
    window.addEventListener("click", this.bla);
  }

  render() {
    const cardStyle = {
      height: 250,
      // width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    }
    return (
      <div style={cardStyle}>
        <Square color={this.props.color} />
        <Label color={this.props.color} />
      </div>
    )
  }
}
class Square extends Component {
  render() {
    const squareStyle = {
      height: 200,
      backgroundColor: this.props.color
    };

    return (
      <div style={squareStyle}>
      </div>
    )
  }
}

class Label extends Component {
  render() {
    const labelStyle = {
      fontFamily: "nunito sans",
      // fontWeight: "bold",
      padding: 13,
      margin: 0
    }
    return (
      <p style={labelStyle}>{this.props.color}</p>
    )
  }
}





export default Card

