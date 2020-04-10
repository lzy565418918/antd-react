import React, { Component } from "react";

export default class Proxy extends Component{
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('/api/FingerUnion/data.json')
            .then(res => res.json())
            .then(res => {
            this.setState({data:res.splice(0,5)})
        })
    }
    
    render() {
        return (
            <div>
                <p>跨域问题</p>
                <ul>
                    {
                        this.state.data.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}