import React, { Component } from "react";

export default class Proxy extends Component{
    constructor() {
        super()
        this.state = {
            html:undefined
        }
    }
    componentDidMount() {
        fetch('/api/FingerUnion/data.json')
            .then(res => res.text())
            .then(res => {
            this.setState({html:res})
        })
    }
    
    render() {
        return (
            <div>
                <p>跨域问题</p>
            </div>
        )
    }
}