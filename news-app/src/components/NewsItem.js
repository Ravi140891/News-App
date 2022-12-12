import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl,newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style = {{left: '90%', zIndex : '1'}}>
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "http://www.nasa.gov/sites/default/files/thumbnails/image/1-pia25626-lunar-1041.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
