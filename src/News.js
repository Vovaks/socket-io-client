import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";

class NewsItem extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         response: false,
    //         endpoint: "http://127.0.0.1:4001"
    //     };
    // }
    //
    // componentDidMount() {
    //     const {endpoint} = this.state;
    //     const socket = socketIOClient(endpoint);
    //     socket.on("FromAPI", data => this.setState({response: data}));
    // }

    render() {
        const {articles} = this.props;


        console.log('article', articles)
        return (
            <div className="NewsItem">
               {/*<p>article.title</p>*/}
            </div>
        );
    }
}

export default NewsItem;
