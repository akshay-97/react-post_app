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

  deletePost= (id) =>{
    let temp=this.state.input.filter((post)=>{
      return post.id===id
    }) 
    this.setState({
      input:temp
  });
    
  }
  render() {
    return (
      <div>
        <Navbar />
        <AddPost addPost={this.addPost}/>
        <Posts post={this.state.input} deletePost={this.deletePost}/>

      </div>
    );
  }
}

export default App;
