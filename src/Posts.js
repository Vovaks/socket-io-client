import React, {Component} from 'react';
import './App.css';

class News extends Component {

    render() {
        const {body} = this.props;

        const list = body.find(body => body.type === "x-im/banner-list").list;
        const postItem = list.map(post =>
            <div style={{'padding-top': '10px'}}>
                <h3>{post.text}</h3>
                <p>{post.url}</p>
                {post.image && <img style={{'height': '120px'}} src={post.image.url}/>}
                <p>.........................................................</p>
            </div>
        );
        console.log('list', list);
        return (
            <div className="News" style={{'padding-top': '20px'}}>
                {postItem}
            </div>
        );
    }
}

export default News;
