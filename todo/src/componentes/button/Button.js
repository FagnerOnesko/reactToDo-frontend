import  React, {Component} from "react"

class Button extends Component{
    render() {
        return (
            <button>
                <i class={this.props.classBut}></i>
            </button>
        )
    }
}

export default Button