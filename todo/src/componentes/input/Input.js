import React, {Component} from "react";
import Button from "../button/Button";

class Input extends Component{

    render() {
        return (
            <div class="add-todo">
                <input type="text" placeholder={this.props.placeholder}/>
                <Button classBut="fas fa-plus-square"/>
            </div>
        )
    }
}

export default Input;

