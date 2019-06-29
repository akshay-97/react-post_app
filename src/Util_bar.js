import React, { Component } from 'react'

export default class Util_bar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-lg-1">
                    <button className="btn btn-primary" onClick="">LIKE</button>
                </div>
                <div className="col-lg-2">
                    <label>Add Comment</label>
                </div>
                <div className="col-lg-6">
                    <input type="text" placeholder="enter comment"></input>
                </div>
                <div className="col-lg-3">
                    <button className="btn btn-default" onClick="">View Comments</button>
                </div>
                
            </div>
        )
    }
}
