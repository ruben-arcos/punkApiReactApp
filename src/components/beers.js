import React, { Component } from "react";
import "../App.css"
import Beer from "./beer"

/**
 * component life cycle
 * constuctor
 */

export default class beers extends Component {
  constructor(props) {
    // to watcht he life cycle constructor
    console.log("constructor initialized")
    super(props);

    this.state = {
        beers: []
    }
  }


  componentDidMount() {
    console.log("component mounted")
    fetch(" https://api.punkapi.com/v2/beers")
    // promises
    .then((response) => response.json())
    .then((data) => {
        this.setState({
            beers: [...data]
        })
    })
  }

  //only fires when something is updated
  componentDidUpdate() {
    console.log("component updated", this.state.beers)
  }

  render() {
    // to see life cycle happen
    console.log("render", )
    return (
        <div>
            <h1>everything beers</h1>
            <ul>
                {this.state.beers.map( (beer) => {
                    return <Beer beer={beer} />
                })}
            </ul>
        </div>
    );
  }
}


