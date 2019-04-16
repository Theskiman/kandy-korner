import React, { Component } from 'react'

export default class CandyTypes extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="content candyTypes">
                    <h1>Candy Types</h1>
                    {
                        this.props.candyTypes.map(candyType =>
                            <div key={candyType.id}>
                            {candyType.name}
                            </div>
                            )
                    }
                </div>
            </React.Fragment>
        )
    }
}