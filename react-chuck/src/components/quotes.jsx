import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import { Button } from "bloomer";
class Quote extends Component {
    state = {
        quote: "Fetching quotes..."
    };

    async componentDidMount() {
        console.log("props are", this.props);
        const category = this.props.match.params.category_name;
        console.log("category is", category);
        this.getQuote(category);
    }

    getQuote = async category => {
        const data = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = data.value;

        this.setState({
            quote
        });
    };

    handleClick = () => {
        this.getQuote(this.props.match.params.category_name);
    };

    render() {
        const { quote } = this.state;
        const category = this.props.match.params.category_name;
        return (
            <>
                <p>{quote}</p>
                <Button
                    isColor="info"
                    isSize="medium"
                    onClick={() => this.handleClick()}
                >
                    Get Another Quote from the {category} Category!
                </Button>
            </>
        );
    }
}

export default Quote;
