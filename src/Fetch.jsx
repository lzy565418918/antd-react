import React,{ Component } from 'react'

export default class Fetch extends Component{

    constructor() {
        super()
        this.state = {
            labels: []
        }
    }

    componentDidMount() {
        fetch('http://iwenwiki.com/api/blueberrypai/getInterestingInfo.php')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({labels: data.labels})
            })
    }
    

    render() {
        let { labels } = this.state
        return (
            <div>
                {
                    labels.length>0?
                    <ul>
                        {
                            labels.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                    :<div>加载中。。。</div>
                }
            </div>
        )
    }
}