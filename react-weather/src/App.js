import React, { Component } from "react";
import "./App.css";
import { loadData } from "./utils/loadData";
import Search from "./components/search";
class App extends Component {
    state = {
        city: "Kansas City",
        data: null
    };

    async componentDidMount() {
        let location = this.state.city;
        const data = await loadData(
            `https://api.openweathermap.org/data/2.5/weather?q=${location},US&appid=2f4580c1da2a1471787ee4c356181fd1`
        );

        this.setState({
            data
        });
    }

    handleCitySubmit(e) {
      e.preventDefault();
      e.persist();
      console.log(e.target.value);
    }

    render() {
        const { data } = this.state;
        console.log('render of app.js', data);
        return (
            <>
                <div>
                    {data ? (
                        <Search 
                        handleCitySubmit={this.handleCitySubmit} />
                    ) : (
                        <p>Fetching Data</p>
                    )}
                </div>
            </>
        );
    }
}

export default App;
