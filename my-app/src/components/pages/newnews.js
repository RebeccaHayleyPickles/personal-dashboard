import React from 'react';
import Header from '../headerComponent/header';

class Newnews extends React.Component {
  state = {
    headline: undefined,
    image: undefined,
    text: undefined
  }
  componentDidMount = async () => {
    this.getNews();
}
  getNews = async () => {
    const api_call = await fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-08&sortBy=publishedAt&apiKey=4e872855275d40d69938965949627115`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
        headline: data.articles[0].title,
        image: data.articles[0].urlToImage,
        text: data.articles[0].content

    });
  }

  render() {
    return (
      <div className="container-fluid">
          <Header />
        <h1> News </h1>
        { this.state.headline && <h2> {this.state.headline} </h2> }
        { this.state.image && <h2> {this.state.image} </h2> }
        { this.state.text && <p> {this.state.text} </p> }
      </div>
    );
  }
};

export default Newnews;