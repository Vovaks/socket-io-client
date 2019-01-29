import React, {Component} from 'react';
import './App.css';
import socketIOClient from "socket.io-client";
import Posts from "./Posts"

class NewsItem extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: "http://127.0.0.1:4001"
        };
    }

    componentDidMount() {
        const {endpoint} = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => this.setState({response: data}));
    }

    render() {
        const {response} = this.state;
        const {headline, leadin} = response;
        return (
            <div className="NewsItem">
                {response ? (
                        <div>
                            <h1>{headline}</h1>
                            <h2>{leadin}</h2>
                            {response.body && <Posts body={response.body}/>}
                        </div>
                    )

                    :
                    <div>Loading....</div>
                }
            </div>
        );
    }
}

export default NewsItem;
