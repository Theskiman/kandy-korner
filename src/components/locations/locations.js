import React, { Component } from 'react'

export default class Locations extends Component {
    render() {
        return (
            <React.Frament>
                <div className="loactions content">
                    <h1>Locations</h1>
                    {
                        this.props.locations.map(location =>
                            <div key={location.id}>
                            {location.name}
                            </div>
                            )
                    }
                </div>
            </React.Frament>
        )
    }
}