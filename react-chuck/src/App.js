import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./components/wrapper";
import Quote from "./components/quotes";
// Dropdown is the one I made yesterday
import Dropdown from "./components/categoryDropDown";
import "bulma/css/bulma.css";
import "./App.css";
//CategoryList is the in-class one
import CategoryList from "./components/categoryList";

// Reverting App to a functional component
function App() {
    return (
        <div className="App">
            <header>
                <h1>Chuck says ReAcT!</h1>
            </header>
            <Router>
                <Wrapper>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* only load this content when exactly at the root route */}
                    <Route path="/" exact>
                        <CategoryList />
                    </Route>
                    {/* option 1 */}
                    {/* <Route
                    path="/category/:category_name?"
                    render={routeProps => <Quote {...routeProps} />}
                /> */}
                    {/* option 2 */}
                    <Route path="/category/:category_name" component={Quote} />
                </Wrapper>
            </Router>
        </div>
    );
}

export default App;
