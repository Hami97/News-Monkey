import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps={
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
   async componentDidMount(){
      let url= `https://newsapi.org/v2/top-headlines?sources?country=${this.props.country}&category=${this.props.category}&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=1&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      try {
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading: false ,totalArticles: parsedData.totalResults });
      } 
      catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    handlePreviousClick = async ()=> {
      let url= `https://newsapi.org/v2/top-headlines?sources?country=${this.props.country}&&category=${this.props.category}&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      try {
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
      } 
      catch (error) {
        console.error("Error fetching data: ", error);
      }

      this.setState({
        // loading: true,
        page:this.state.page-1

      })
    }
    
    handleNextClick = async ()=> {
      
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else
      {
        let url= `https://newsapi.org/v2/top-headlines?sources?country=${this.props.country}&category=${this.props.category}&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;      
      try {
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.setState({loading: trure})
        this.setState({ articles: parsedData.articles, loading: true });
      } 
      catch (error) {
        console.error("Error fetching data: ", error);
      }

      this.setState({
        loading: false,
        page:this.state.page+1
        
      })
      }
    }
  render() {
    return (
        <>
        <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="container my-3"></div>
            <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
               return <div className="col-md-4 my-2" key={element.url}>
              <NewsItem title= {element.title?element.title:""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage? element.urlToImage: "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1497617145-1.jpg?resize=1200,800"} newsUrl = {element.url}/>
              </div> 
            })}
            </div>        
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} onClick={this.handlePreviousClick} className="btn btn-dark"> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
        </>
    );
  }
}

export default News;