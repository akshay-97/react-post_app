import React, { Component } from "react";

class PostsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="row">
        <div class="col-sm-12">
          <h4>{this.props.postitem.title}</h4>
          <hr />
        </div>
        <div class="col-sm-2">
          <span class="label label-default label-arrow label-arrow-right pull-right">
            1 Hour Ago
          </span>
        </div>
        <div class="col-sm-10">
          <p>{this.props.postitem.post}</p>
          <div class="pull-right">
            <span class="label label-warning">web-development</span>{" "}
            <span class="label label-warning">bootstrap</span>{" "}
            <span class="label label-warning">responsive</span>
          </div>
          <p>
            <button class="btn btn-default">More</button>
          </p>
        </div>
      </div>
    );
  }
}

export default PostsItem;
