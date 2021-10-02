import React from "react";
import friendsService from "../services/friends";
import SingleFriend from "../SingleFriend";
import { withRouter } from "react-router-dom";
import temptLogin from "../services/tempLogin";
import debug from "sabio-debug";

const _logger = debug.extend("Friend");

class Friends extends React.Component {
  state = {
    friends: [],
  };

  mapFriends = (friend) => {
    return (
      <React.Fragment key={`Friends-${friend.id}`}>
        <SingleFriend friend={friend} onClick={this.onEditBtnClickFull} />
      </React.Fragment>
    );
  };

  componentDidMount() {
    temptLogin.quick().then(this.quickSuccess).catch(this.quickError);
    friendsService.showAll().then(this.showSuccess).catch(this.showError);
  }

  quickSuccess = (response) => {
    _logger(response);
  };

  quickError = (err) => {
    _logger("Tempt Login did not work", err);
  };

  showSuccess = (response) => {
    _logger(response.data.item.pagedItems);
    this.setState({ friends: response.data.item.pagedItems });
  };

  showError = (response) => {
    _logger("Can't show friends", response);
  };

  addBtnClicked = () => {
    this.props.history.push("/friends/new");
  };

  onEditBtnClickFull = (presId, friendData) => {
    _logger(presId, friendData);
    this.props.history.push("/friends/" + presId + "/edit", {
      type: "ADD_TO_FRIENDFORM",
      payload: friendData,
    });
  };

  render() {
    return (
      <div>
        <h1>
          Friends
          <button
            className="btn btn-success"
            size="lg"
            onClick={this.addBtnClicked}
          >
            Add
          </button>
        </h1>
        <div className="row">{this.state.friends.map(this.mapFriends)}</div>
      </div>
    );
  }
}

export default withRouter(Friends);
