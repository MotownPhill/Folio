import React from "react";
import rssService from "../services/rssService";
import temptLogin from "../services/tempLogin";
import debug from "sabio-debug";

const _logger = debug.extend("Rss");

class RssFeed extends React.Component {
    componentDidMount() {
        temptLogin.quick().then(this.quickSuccess).catch(this.quickError);
        rssService.starredFeeds().then(this.showSuccess).catch(this.showErrorr);
    }

    quickSuccess = (response) => {
        _logger(response);
      };
    
      quickError = (err) => {
        _logger(err);
      };
    
      showSuccess = (response) => {
        _logger(response);
        // this.setState({ jobs: response.data.items });
      };
    
      showErrorr = (response) => {
        _logger(response);
      };


    render() {
        return(
            <h1>Rss Feed</h1>
        )
    }
}

export default RssFeed