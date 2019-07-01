import React, { Component } from "react";
import AddComments from "./AddComments";
import Comment from "./Comment";

export default class UtilBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  counter = () => {
    this.props.likes(this.props.postitem.id)
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-2">
          <button className="btn btn-sm btn-info" onClick={this.counter}>
            {this.props.postitem.counter} LIKES
          </button>
        </div>

        <AddComments id={this.props.postitem.id} addComments={this.props.addComments} />
        <Comment comments={this.props.postitem.comments} />
      </div>
    );
  }
}
