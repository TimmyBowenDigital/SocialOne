import React, { Component } from "react";
import Button from "../components/ui-elements/button"

class ProfilePage extends Component {
    render() {
        return (
            <Button text="Profile" onClick={() => {
                console.log("hola at ya!!");
            }}
            />
        );
    }
}

export default ProfilePage