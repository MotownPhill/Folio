import React from "react";
import friendsService from "../services/friends";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import debug from "sabio-debug";

class FriendsForm extends React.Component {
  state = {
    friendForm: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      primaryImage: "",
      skill: [],
    },
  };

  componentDidMount() {
    const _logger = debug.extend("FriendForm");
    _logger("Mounted");
    if (this.props.location.state) {
      let locState = this.props.location.state;
      if (locState.type === "ADD_TO_FRIENDFORM") {
        this.setState({ friendForm: locState.payload });
      }
    }
  }

  _logger = () => {
    debug.extend("FriendForm");
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let friendForm = { ...this.state.friendForm };
      friendForm[inputName] = newValue;

      return { friendForm };
    });
  };

  addBtnClicked = () => {
    let payload = {
      title: this.state.friendForm.title,
      bio: this.state.friendForm.bio,
      summary: this.state.friendForm.summary,
      headline: this.state.friendForm.headline,
      slug: this.state.friendForm.slug,
      statusId: "active",
      primaryImage: this.state.friendForm.primaryImage,
    };

    friendsService.add(payload).then(this.addSuccess).catch(this.addError);
  };

  addSuccess = (response) => {
    toast.success(response.data);
    this.props.history.push("/friends");
  };

  addError = (response) => {
    toast.error(response);
  };

  updateBtnClicked = () => {
    let id = this.props.match.params.id;
    let payload = {
      title: this.state.friendForm.title,
      bio: this.state.friendForm.bio,
      summary: this.state.friendForm.summary,
      headline: this.state.friendForm.headline,
      slug: this.state.friendForm.slug,
      statusId: "active",
      primaryImage: this.state.friendForm.primaryImage,
      skill: [this.state.friendForm.skill],
    };
    friendsService
      .edit(id, payload)
      .then(this.editSuccess)
      .catch(this.editError);
  };

  editSuccess = (response) => {
    const _logger = debug.extend("FriendForm");
    _logger(response);
    this.props.history.push("/friends");
  };

  editError = (response) => {
    const _logger = debug.extend("FriendForm");
    _logger(response);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={this.onFormFieldChange}
              value={this.state.friendForm.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              className="form-control"
              id="bio"
              name="bio"
              onChange={this.onFormFieldChange}
              value={this.state.friendForm.bio}
            />
          </div>
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              className="form-control"
              id="summary"
              name="summary"
              onChange={this.onFormFieldChange}
              value={this.state.friendForm.summary}
            />
          </div>
          <div className="form-group">
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              className="form-control"
              id="headline"
              name="headline"
              onChange={this.onFormFieldChange}
              value={this.state.friendForm.headline}
            />
          </div>
          <div className="form-group">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              name="slug"
              onChange={this.onFormFieldChange}
              value={this.state.friendForm.slug}
            />
          </div>
          <div className="form-group">
            <label htmlFor="primaryImage">Avatar</label>
            <input
              type="url"
              className="form-control"
              id="primaryImage"
              name="primaryImage"
              onChange={this.onFormFieldChange}
              value={this.state.friendForm.primaryImage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="skill">Skills</label>
            <input
              type="url"
              className="form-control"
              id="skill"
              name="skill"
              onChange={this.onFormFieldChange}
              value={this.state.friendForm.skill}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={
              this.props.match.params?.id
                ? this.updateBtnClicked
                : this.addBtnClicked
            }
          >
            {this.props.match.params?.id ? "Update" : "Submit"}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.showBtnCicked}
          >
            Show Friends
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(FriendsForm);
