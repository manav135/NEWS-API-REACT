import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ListNews from './components/ListNews';
import Footer from './components/Footer';
import './css/main.css';

class App extends Component {
  state = {
    news: []
  }  
  componentDidMount(){
    this.checkNews();
  }
  checkNews = async (category = 'general') => {
    const url = `
      https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=76cbe4e6f7494d9cbe8666b6516e79cf
    `;
    const response = await fetch(url);
    const news = await response.json();
    this.setState({
      news: news.articles
    })
  }

  render() { 
    return ( 
      <Fragment>
        <Header
          title = 'NEWS'
        />
        <div className='container white container-news'>
          <SearchForm
            checkNews={this.checkNews}
          />
          <ListNews
            news = {this.state.news}
          />
        </div>
        <Footer
          NewsAPI = 'Copyrigth &copy; 2025 NewsAPI'
        />
      </Fragment>
     );
  }
}
 
export default App;
