import React, { Component } from 'react'
import "./candies.css"

export default class CandyList extends Component {
    render() {
        return (
            <article className="candies content">
                <h1>Candy List</h1>
                {
                    this.props.candies.map(candy => 
                        <div key={candy.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {candy.name}
                                    <button
                                        onClick={() => this.props.deleteCandy(candy.id)}
                                        className="card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                        
                        )
                }
            </article>
        )
    }
}