import React, { Component } from "react";
import Button from "./ui-elements/button"

class FooterPanel extends Component {
    render() {
        return (
            <Button text="Footer" onClick={() => {
                console.log("hola at ya!!");
            }}
            />
        );
    }
}

export default FooterPanel