import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News Monkey`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?sources?country=${this.props.country}&category=${this.props.category}&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        totalArticles: parsedData.totalResults,
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  async componentDidMount() {
    this.updateNews();
  }

  // handlePreviousClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?sources?country=${
  //   //   this.props.country
  //   // }&&category=${
  //   //   this.props.category
  //   // }&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${this.props.pageSize}`;
  //   // try {
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   this.setState({ articles: parsedData.articles });
  //   // } catch (error) {
  //   //   console.error("Error fetching data: ", error);
  //   // }
  //   // this.setState({
  //   //   // loading: true,
  //   //   page: this.state.page - 1,
  //   // });
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?sources?country=${this.props.country}&category=${this.props.category}&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=1&pageSize=${this.props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // try {
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   this.setState({
  //   //     articles: parsedData.articles,
  //   //     loading: false,
  //   //     totalArticles: parsedData.totalResults,
  //   //   });
  //   // } catch (error) {
  //   //   console.error("Error fetching data: ", error);
  //   // }
  //   // if (
  //   //   this.state.page + 1 >
  //   //   Math.ceil(this.state.totalResults / this.props.pageSize)
  //   // ) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?sources?country=${
  //   //     this.props.country
  //   //   }&category=${
  //   //     this.props.category
  //   //   }&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   try {
  //   //     let data = await fetch(url);
  //   //     let parsedData = await data.json();
  //   //     // this.setState({loading: trure})
  //   //     this.setState({ articles: parsedData.articles, loading: true });
  //   //   } catch (error) {
  //   //     console.error("Error fetching data: ", error);
  //   //   }
  //   //   this.setState({
  //   //     loading: false,
  //   //     page: this.state.page + 1,
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?sources?country=${this.props.country}&category=${this.props.category}&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalArticles: parsedData.totalResults,
        // loading: false,
      });
    } catch (error) {
      console.error("Error fetching more data: ", error);
      this.setState({ loading: false });
    }
  };
  render() {
    return (
      <>
        <h2 className="text-center">
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="container my-3"></div>
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1497617145-1.jpg?resize=1200,800"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}

              {/* {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-2" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imgUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1497617145-1.jpg?resize=1200,800"
                        }
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })} */}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
            className="btn btn-dark"
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>  */}
      </>
    );
  }
}
export default News;
