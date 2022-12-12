import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
        articles : [],
        loading : false,
        page : 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4a0837a8483648d28909bfad317d695e&page=1&pageSize=${this.props.pageSize}`;

      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4a0837a8483648d28909bfad317d695e&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  }
  handleNextClick = async () => {
    if(this.state.page + 1> Math.ceil(this.state.totalResults / this.props.pageSize)){

    } else{
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=4a0837a8483648d28909bfad317d695e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
}
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((elem) => {
            return (
              <div className="col-lg-4" key={elem.url}>
                <NewsItem
                  title={elem.title ? elem.title.slice(0, 45) : ""}
                  description={
                    elem.description ? elem.description.slice(0, 60) : ""
                  }
                  imageUrl={elem.urlToImage}
                  newsUrl={elem.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
