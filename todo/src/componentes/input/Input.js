import React, {Component} from "react";

class Input extends Component{

    render() {
        return (
            <div class="add-todo">
                <input type="text" placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

export default Input;

