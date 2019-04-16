import React, { Component } from 'react'
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/nav"
import "./KandyKorner.css"

export default class KandyKorner extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}