import React from "react";

class App extends React.Component {

  constructor(){
      super()
    console.log('Hello from Contructor')
    this.state = {
        todos: []
     }
  }
//! componentDidMount comes after render() to indicate that the DOM did indeed mount. Usually if you need to fetch data from and API, you would do it in this lifecycle.
  componentDidMount(){
      console.log('Component Mounted')
      fetch('https://jsonplaceholder.typicode.com/todos/')
     .then(res => res.json()) // parse the request
     .then(json => this.setState({ todos:(json) })) // gets the data  
  }
//! This method is called upon after information is updated. This method is not called is not called up for the inital input of information. Information was updated in component above
  componentDidUpdate(){
      console.log('Component Updated');
  }

  render() {
 
      console.log('Hello from Render')
      return(
          <div>  
              <h1><a href='https://reactjs.org/docs/react-component.html'>Lifecycle Methods</a></h1>
          </div>
      )
  }
}

export default App