import React, { Component } from "react";

class AddComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comment:""
        };
      }
    
      change = e =>{
        
          this.setState({
            comment: e.target.value
          });
        
      
      }
    
      submit = () => {
        const addComments  = this.props.addComments ;
        const {comment} = this.state;
        const id =this.props.id;
    
        addComments(comment,id)
        this.setState({
          comment: ""
        });
      };
  render() {
    return (
      <div className="col-lg-10">
        <div className="row">
          <div className="col-lg-9 form-group w-100">
            <input type="text" className="form-control" placeholder="enter comment" onChange={this.change} value={this.state.comment} />
          </div>
          <div className="col-lg-3">
                    <button className="btn btn-default btn-sm" onClick={this.submit}>View Comments</button>
                </div>
        </div>
      </div>
    );
  }
}

export default AddComments;
