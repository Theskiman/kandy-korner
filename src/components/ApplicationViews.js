import { Route } from "react-router-dom"
import React, { Component } from "react"
import Candies from "./candies/candies"
import CandyTypes from "./candyTypes/candyTypes"
import Employees from "./employees/employees"
import Locations from "./locations/locations"




export default class ApplicationViews extends Component {

state = {
    stores: [],
    employees: [],
    candyTypes: [],
    candies: []
}

componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/candies")
        .then(r => r.json())
        .then(candies => newState.candies = candies)
        .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/candyTypes")
        .then(r => r.json()))
        .then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => fetch("http://localhost:5002/locations")
        .then(r => r.json()))
        .then(locations => newState.locations = locations)
        .then(() => this.setState(newState))
}

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) =>{
                    return <Candies candies={this.state.candies} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <Employees employees={this.state.employees} />
                }} />
                <Route path="/locations" render={(props) => {
                    return <Locations locations={this.state.locations} />
                }} />
                <Route path="/candyTypes" render={(props) => {
                    return <CandyTypes candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }

}