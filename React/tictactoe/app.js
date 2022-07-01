//!---------------------------------------------------------------Component-------------------------------------------------------
//! Header Component
const Header = () => {
  return <h1>React Tic Tac Toe !!!!</h1>;
};

//! Player Component
const Player = (props) => {
  //! We are using the word props as an argument. props.playName allows us to set the playerName to what we want and call it back
  return (
    <div className={props.playerName}>
      <h2>Player {props.playerName} </h2>
      <h3>Wins: </h3>
    </div>
  );
};

//! Square Component
const Square = () => {
  return (
    <div>
      <h4 className="square">Square</h4>
    </div>
  );
};

//!Board Component 
const Board = () => {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

// Extends means you are giving what you are extending access to the object before it. In this case, we are extending React.Component.
//  Perhaps the extend keyword could be related to the '=' operator?
//! This is React's version of a function, it is called a Component
class App extends React.Component {
  render() {
    //! We are adding the function in the Component using JSX syntax
    return (
      <div className="container">
        <Header />
        <Player playerName="X"/>
        <Player playerName="O"/>
        <Board />
      </div>
    );
  }
}

//!----------------------------------------------------------------Virtual DOM------------------------------------------------------
//! The ReactDOM.render is what displays on the live server. The App component is main component
ReactDOM.render(<App />, document.getElementById("root"));