import React, { Component } from 'react'
import Drink from './Drink.js'
import "../App.css"

export default class Beers extends Component {
    constructor(props){
        console.log("constructor initialized")
        super(props)

        this.state = {
            drunks: []
        }
    }

    componentDidMount(){
        console.log("component mounted")
        fetch("https://api.punkapi.com/v2/beers")
        .then( (response) => response.json() )
        .then( (data) =>
            this.setState({
                drunks: [data]
            })
        )
    }

    componentDidUpdate(){
        console.log("component updated", this.state.drunks)
    }

    render() {
        console.log("rendering")
        return(
          <div>
            <h2>Beer List</h2>
            <ul className='beer-list'>
                {this.state.drunks.map( (bev) => {
                    return(
                        <div>
                        <Drink bev = {bev} />
                        </div>
                    )
                })}
            </ul>
          </div>
        )
    }
}