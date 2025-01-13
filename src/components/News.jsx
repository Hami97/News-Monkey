import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `${capitalizeFirstLetter(
  //   props.category
  // )} - News Monkey`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?sources?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading({ loading: true });
    try {
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(50);
      setArticles(parsedData.articles);
      setLoading(false);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  // handlePreviousClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?sources?country=${
  //   //   props.country
  //   // }&&category=${
  //   //   props.category
  //   // }&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=${
  //   //   page - 1
  //   // }&pageSize=${props.pageSize}`;
  //   // try {
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   setState({ articles: parsedData.articles });
  //   // } catch (error) {
  //   //   console.error("Error fetching data: ", error);
  //   // }
  //   // setLoading(true);
  //   // setPage(page - 1);
  //   updateNews();
  // };

  // handleNextClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?sources?country=${props.country}&category=${props.category}&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=1&pageSize=${props.pageSize}`;
  //   // setState({ loading: true });
  //   // try {
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   setState({
  //   //     articles: parsedData.articles,
  //   //     loading: false,
  //   //     totalArticles: parsedData.totalResults,
  //   //   });
  //   // } catch (error) {
  //   //   console.error("Error fetching data: ", error);
  //   // }
  //   // if (
  //   //   page + 1 >
  //   //   Math.ceil(totalResults / props.pageSize)
  //   // ) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?sources?country=${
  //   //     props.country
  //   //   }&category=${
  //   //     props.category
  //   //   }&apiKey=8ed1458004ac478eb3f268d7a96c71e5&page=${
  //   //     page + 1
  //   //   }&pageSize=${props.pageSize}`;
  //   //   try {
  //   //     let data = await fetch(url);
  //   //     let parsedData = await data.json();
  //   //     // setState({loading: trure})
  //   //     setState({ articles: parsedData.articles, loading: true });
  //   //   } catch (error) {
  //   //     console.error("Error fetching data: ", error);
  //   //   }
  //   //   setState({
  //   //     loading: false,
  //   //     page: page + 1,
  //   //   });
  //   // }
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?sources?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching more data: ", error);
      setLoading(false);
    }
  };
  return (
    <>
      <h2 className="text-center" style={{ margin: "35px 0" }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="container my-3"></div>
          <div className="row">
            {articles.map((element) => {
              return (
                <div
                  className="col-md-4 my-2 d-flex justify-content-center mb-4"
                  key={element.url}
                >
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

            {/* {!loading &&
                articles.map((element) => {
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
            disabled={page <= 1}
            onClick={handlePreviousClick}
            className="btn btn-dark"
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            onClick={handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>  */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
