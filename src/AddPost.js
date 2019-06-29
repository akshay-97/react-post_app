import React, { Component } from "react";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      post: ""
    };
  }

  change = e =>{
    if(e.target.id==='in'){
      this.setState({
        title: e.target.value
      });
    }
    else{
      this.setState({
        post: e.target.value
      });
    }
  }

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
        <div className="container">
          <div className="row" id="row_style">
            <h4 className="text-center col-sm-12">Submit new post</h4>
            <div className="col-md-3   col-md-offset-4" />
            <div className="col-md-6   col-md-offset-4">
              <div className="form-group">
                <input
                  type="text"
                  id="in"
                  value={this.state.title}
                  className="form-control"
                  placeholder="Title"
                  onChange={this.change}
                />
              </div>
              <textarea
                value={this.state.post}
                onChange={this.change}
                id="pt"
                className="form-control"
                cols="40"
                rows="6"
                placeholder="What's on your mind?"
              />
              <br />
              <div className="form-group">
                <button
                  className="btn btn-primary display-block"
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
