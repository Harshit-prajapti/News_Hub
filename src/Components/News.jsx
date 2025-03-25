/* eslint-disable react/prop-types */
import { PureComponent } from 'react'
// import { useState } from 'react';
import NewsItem from './NewsItem'
import { useEffect } from 'react';
// import { useState } from 'react';
export default class News extends PureComponent {
    articles = [

    ]
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page : 1
        }
        this.url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.topic}&apiKey=480e04df8f0646febad5d67789d6e8c0`
    }
    fatchNews = () => {
        const fatchData = async () => {
            let data = await fetch(this.url)
            let parseData = await data.json()
            this.setState({ articles: parseData.articles })
        }
        fatchData();
    }
    componentDidMount() {
        this.fatchNews();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.topic !== this.props.topic) {
            console.log("I was called");
            this.fatchNews();
        }
    }
    handlePreviousClick = async() =>{
        console.log("prev")
        this.url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.topic}&apiKey=480e04df8f0646febad5d67789d6e8c0&page=${this.state.page-1}`

        this.setState({
            page : this.state.page - 1,
            
        })
        this.fatchNews();
    }
    handleNextClick = async() => {
        console.log("next")
        this.url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.topic}&apiKey=480e04df8f0646febad5d67789d6e8c0&page=${this.state.page+1}`

        this.setState({
            page : this.state.page + 1,
            
        })
        this.fatchNews();
    }
    render() {
        return (
            <>
                <h1 className='heading my-3'>NewsHub - Top headlines</h1>
                <div className="container">
                    <div className="row gx-5">
                        {this.state.articles.map((element) => {
                            return <div key={element.url} className="col my-3 mx-1">
                                <NewsItem imgUrl={element.urlToImage ? element.urlToImage : "https://www.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"} url={element.url} title={element.title ? element.title.slice(0, 44) + "..." : "title is not avaliable"} description={element.description ? element.description.slice(0, 85) + "..." : "descripition is not avaliable"} />
                            </div>
                        })}
                    </div>
                    <div className="container my-3 d-flex justify-content-between">
                        <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}
