import React, { Component } from 'react'
import Drink from './Drink.js'
import "../App.css"
import axios from 'axios'

export default class Beers extends Component {
    constructor(props){
        console.log("constructor initialized")
        super(props)

        this.state = {
            drunks: []
        }
    }

    componentDidMount() {
        console.log("component mounted");
        axios.get("https://api.punkapi.com/v2/beers")
          .then((response) => {
            this.setState({
              drunks: response.data
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }

    componentDidUpdate(){
        console.log("component updated", this.state.drunks)
    }

    render() {
        console.log("rendering")
        return(
          <div>
            <h2>Beer List</h2>
            <div className='beer-list'>
                {this.state.drunks.map( (bev) => {
                    return(
                        
                        <Drink bev = {bev}  />
                        
                    )
                })}
            </div>
          </div>
        )
    }
}