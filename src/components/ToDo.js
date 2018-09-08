import React, {Component} from "react";

class ToDo extends Component{
    render(){
        return(
            <div>
            <li>

                <span>{this.props.description}</span>
                <input type="checkbox" checked = {this.props.isCompleted} />
                
            </li>
            </div>
        )
    }
}

export default ToDo;