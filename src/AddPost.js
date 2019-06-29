import React, { Component } from "react";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      post: ""
    };
  }

  change_t = e => {
    this.setState({

      title: e.target.value
    });
  };
  change_p = e => {
    this.setState({
    
      post: e.target.value
    });
  };
  submit = () => {
    const { addPost } = this.props;
    const { title, post } = this.state;
    console.log(this.state)
    addPost(title, post);
    this.setState({
      title: "",
      post: ""
    });
  };
  render() {
    return (
      <div>
        <div class="container">
          <div class="row" id="row_style">
            <h4 class="text-center col-sm-12">Submit new post</h4>
            <div class="col-md-3   col-md-offset-4" />
            <div class="col-md-6   col-md-offset-4">
              <div class="form-group">
                <input
                  type="text"
                  value={this.state.title}
                  class="form-control"
                  placeholder="Title"
                  onChange={this.change_t}
                />
              </div>
              <textarea
                value={this.state.post}
                onChange={this.change_p}
                id="editor"
                class="form-control"
                cols="40"
                rows="6"
                placeholder="What's on your mind?"
              />
              <br />
              <div class="form-group">
                <button
                  class="btn btn-primary display-block"
                  id="submit"
                  onClick={this.submit}
                >
                  Submit new post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
