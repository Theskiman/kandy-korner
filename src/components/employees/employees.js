import React, { Component } from 'react'

export default class Employees extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="content employees">
                    <h1>Employees</h1>
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id}>
                            {employee.name}
                            </div>
                            )
                    }
                </div>
            </React.Fragment>
        )
    }
}