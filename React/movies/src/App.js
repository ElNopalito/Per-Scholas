import './App.css';
import { Component } from 'react'
import MovieInfo from './Components/MovieInfo';

class App extends Component {
//-------------------------------------------------
  state = {
    baseURL: 'https://www.omdbapi.com/?',
    apiKey:'apikey=905e958b',
    movieTitle: '',
    query:'&t=',
    searchURL: '', 
    movie: null 
  }
//!----------------------------------------------------------------------------Where ID is re-rendered with State---------------------------------
    handleChange = (event) => {
     this.setState({ [event.target.id]: event.target.value });
    }
//!---------------------------------------------------Submit Form re-renders using State when submit button is clicked-------------------------------
handleSubmit = (e) => {
  e.preventDefault()
//! This is where we pass all the objects we have in state to handleSubmit under searchURL so when the values are manipulated and the button is clicked, the values will re-render. It is also concatenanted.
  this.setState({searchURL: this.state.baseURL + this.state.apiKey + this.state.query + this.state.movieTitle},
    () => {
//! In this function, it is synchronous and therefore, will read top to bottom. First, it is fetching the information from searchURL which is set to all the objects concatenated above
//! After, it will render all the information in json format
//! Lastly it will update the movie value in json format     
      fetch(this.state.searchURL)
      .then(res => res.json())
      .then(json => this.setState({movie: json}))
    })
}


  render() {
  return (
    <div className="App">
      <h1>Movies App</h1>
    {/* This is an Event Listener that will call upon the handleSubmit function when a user submits a value in the form*/}
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='movieTitle'>Title</label>

        <input 
        type='text'
        id='movieTitle' 
        value={this.state.movieTitle} 
        onChange={this.handleChange}
        />

        <input type = 'submit' />

      </form>
      {/*URL Reference. When a user inputs a movie name, if the name belongs to the API, it will render in our page with a link*/}
      <a href={this.state.searchURL}>{this.state.searchURL}</a>
{/* setting movie object to MovieInfo using this.state */}
{/* Using AND operator, we are checking if this.state.movie is true. Set to default, it would not be true because movie is null. However, it is in handleSubmit so if we input a movie title, it will re-render and give a value that isn't null */}
{/* So when it isn't null anymore, it will allow for the second condition to render which is rendering the props of movie which is inside of MovieInfo and is set to movie object in state */}
      {this.state.movie && <MovieInfo movie={this.state.movie}/>}
    </div>
  );
}
}


export default App;