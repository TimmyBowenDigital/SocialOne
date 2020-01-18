import React, { Component } from "react";
import Button from "./ui-elements/button"

class ProfileDetailPanel extends Component {
    render() {
        return (
            <Button text="Detail" onClick={() => {
                console.log("hola at ya!!");
            }}
            />
        );
    }
}

export default ProfileDetailPanel