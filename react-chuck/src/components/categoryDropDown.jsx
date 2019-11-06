import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class DropDown extends Component {
    state = {
        categories: []
    };

    async componentDidMount() {
        const data = await loadData(
            `https://api.chucknorris.io/jokes/categories`
        );
        this.setState({ categories: data });
    }

    render() {
        return (
            <>
                <label htmlFor="category-select">Choose a category:</label>

                <select
                    name="categories"
                    id="category-select"
                    onClick={this.props.onClick}
                >
                    <option value="">--Please choose an option--</option>
                    {this.state.categories.map(el => (
                        <option>{el}</option>
                    ))}
                </select>
            </>
        );
    }
}

export default DropDown;
