import React, { Component } from "react";

type State = {}
type Props = {
    text?: string,
    disable?: boolean,
    className?: string,
    onClick: Function
}

class Button extends Component<Props, State> {
   render() {
       const { text, disable, className, onClick, children = 'Click' } = this.props
       const value = text || children
       return (
           <button className={ disable ? `disable ${className}` : className } onClick={(e) => onClick(e)}> {value} </button>
       )
   }
}

export default Button;