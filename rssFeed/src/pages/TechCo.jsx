import React from "react";
import { withRouter } from "react-router";
import techCoService from "../services/techco";
import SingleTechCo from "../SingleTechCo";
import temptLogin from "../services/tempLogin";

class TechCo extends React.Component {
  state = {
    techCompanies: [],
  };

  componentDidMount() {
    temptLogin.quick().then(this.quickSuccess).catch(this.quickError);
    techCoService.all().then(this.allSuccess).catch(this.allError);
  }

  quickSuccess = (response) => {
    console.log(response);
  };

  quickError = (err) => {
    console.error(err);
  };

  allSuccess = (response) => {
    console.log(response.data.items);
    this.setState({ techCompanies: response.data.items });
  };

  allError = (response) => {
    console.error(response);
  };

  addClick = () => {
    this.props.history.push("/techco/new");
  };

  mapTechCos = (techCo) => {
    return (
      <React.Fragment key={`TechCos-${techCo.id}`}>
        <SingleTechCo techCo={techCo} onClick={this.editBtnClick} />
      </React.Fragment>
    );
  };

  editBtnClick = (techCoId, techCoData) => {
    console.log(techCoId, techCoData);
    this.props.history.push("/techco/" + techCoId + "/edit", {
      type: "ADD_TO_TECHCOFORM",
      payload: techCoData,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>
          Tech Companies{""}
          <button className="btn btn-success" onClick={this.addClick}>
            Add
          </button>
        </h1>
        <hr />
        <div className="row">
          {this.state.techCompanies.map(this.mapTechCos)}
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(TechCo);
