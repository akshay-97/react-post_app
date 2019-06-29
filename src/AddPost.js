import React, { Component } from "react";

class AddPost extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row" id="row_style">
            <h4 class="text-center col-sm-12">Submit new post</h4>
            <div class="col-md-3   col-md-offset-4" />
            <div class="col-md-6   col-md-offset-4">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Title" />
              </div>
              <textarea
                id="editor"
                class="form-control"
                cols="40"
                rows="6"
                placeholder="What's on your mind?"
              />
              <br />
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Tags" />
              </div>
              <div class="form-group">
                <button class="btn btn-primary display-block" id="submit">
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
