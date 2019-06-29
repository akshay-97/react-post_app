import React, { Component } from "react";
import Navbar from "./Navbar";
import AddPost from "./AddPost";
import Posts from "./Posts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: []
    };
  }

  addPost = (t,p) => {
    const record={title: t, post: p};
    this.setState({
      input: [...this.state.input,record]
    })
    
  };

  render() {
    return (
      <div>
        <Navbar />
        <AddPost addPost={this.addPost}/>
        <Posts post={this.state.input}/>

      </div>
    );
  }
}

export default App;
