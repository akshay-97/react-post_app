import React, { Component } from 'react';
import Navbar from './Navbar';
import AddPost from './AddPost';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <AddPost/>
        <Posts/>
      </div>
    );
  }
}

export default App;

