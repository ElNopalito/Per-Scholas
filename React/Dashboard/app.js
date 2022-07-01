//! Header Component
const Header = () => {
    return(
        <div className = "header">
            <h1>Website Dashboard</h1>
        </div>
    )     
}

//! Reviews Component 
const Reviews = () => {
    return(
        <div className = "container">
            <h2>Reviews</h2>
            <p className = "body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
    )
};

//! Average Rating Component 
const AvgRating = () => {
    return(
        <div className = "container2">
            <h2>Average Rating</h2>
            <p>4.6</p>
        </div>
    )
}

//! Website Visitor Component 
const WebsiteVis = () => {
    return(
        <div className = "container 3">
            <h3>Visitors on Website</h3>
        </div>
    )
}

const Menu = () => {
    return(
        <div className = "menubar">
            <h2>Menu</h2>
            <ul className = "list">
                <li>Dashboard</li>
                <br></br>
                <br></br>
                <li>Widget</li>
                <br></br>
                <br></br>
                <li>Reviews</li>
                <br></br>
                <br></br>
                <li>Customer</li>
                <br></br>
                <br></br>
                <li>Customer</li>
                <br></br>
                <br></br>
                <li>Online Analyis</li>
            </ul>
        </div>
    )
};

const Analyis = () => {
    return(
        <div className = "container4">
            <h2>Analysis</h2>
            <ul className = "list2">
                <li>341</li>
                <br></br>
                <li>906</li>
                <br></br>
                <li>576</li>
            </ul>
        </div>
    )
}

//!----------------------------------------------Main App-----------------------------------------------
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Reviews />
                <AvgRating />
                <WebsiteVis />
                <Menu />
                <Analyis />
            </div>
        )
    }
}
//!----------------------------------------------------Virtual DOM-------------------------------------------------
ReactDOM.render( <App />, document.querySelector('main'));