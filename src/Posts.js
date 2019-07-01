import React from "react";
import PostsItem from './PostsItem';

const Posts = (props) => {

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
                
              </div>
            </div>
            {props.post.map((i)=>{
                return <PostsItem postitem={i} deletePost={props.deletePost} likes={props.likes}  addComments={props.addComments}/>;
            })}
            
          </div>
        </div>
      </div>
    );
  }


export default Posts;
