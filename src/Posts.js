import React, {Component} from 'react';
import './App.css';
import NewsItem from "./NewsItem"

class News extends Component {

    render() {
        const {response} = this.props;

        // const newsItem = response.map(article =>
        //     <NewsItem
        //         key={'article_' + article._id}
        //         article={article}
        //     />
        // );

        return (
            <div className="News">
                {/*{newsItem}*/}
                {response && <NewsItem article ={response}/>}

            </div>
        );
    }
}

export default News;
