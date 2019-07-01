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

  addPost = (title,post) => {
    const ti = new Date();
    const id=Date.parse(ti);
    
    const record={id,title,post,counter:0,comments:[]};
    this.setState({
      input: [record,...this.state.input]
    })
    
  };

  likes = (id) =>{
    let obj=[...this.state.input]; 
    for(let i=0;i<this.state.input.length;i++)
    {
       if(obj[i].id===id){
         obj[i].counter ++;
       }
    }

      this.setState({
        input:obj
      });

  }

  addComments = (comment,id) =>{
    let obj= [...this.state.input];
    for(let i=0;i<this.state.input.length;i++){
        if(obj[i].id===id){
          obj[i].comments.push(comment);
        }
    }
    this.setState({
      input:obj
    })
  }

  deletePost= (id) =>{
    let temp=this.state.input.filter((post)=>{
      return post.id!==id
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
        <Posts post={this.state.input} deletePost={this.deletePost} likes={this.likes} addComments={this.addComments}/>

      </div>
    );
  }
}

export default App;
