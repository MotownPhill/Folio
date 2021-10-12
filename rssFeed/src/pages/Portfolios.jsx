import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

class Portfolios extends React.Component {
    state = {
        portfolios:[]
    };

    componentDidMount() {

    }
    getPortfolioItems() {
        axios
          .get('https://maritime.devcamp.space/portfolio/portfolio_items')
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }

    render() {
        return(
            <h1>Portfolios</h1>
        )
    }
}

export default withRouter(Portfolios);