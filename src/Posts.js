import React, { Component } from "react";
import PostsItem from './PostsItem';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="col-md-1" />
          <div class="col-md-11">
            <div class="row">
              <div class="col-sm-12">
                <h1>
                  <i class="glyphicon glyphicon-asterisk" /> posts
                </h1>
                <p class="page-header lead">Blog list example for Bootstrap</p>{" "}
              </div>
            </div>
            {this.props.post.map((i)=>{
                return <PostsItem postitem={i}/>;
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
