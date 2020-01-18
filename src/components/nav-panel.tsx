import React, { Component } from "react";
import Button from "./ui-elements/button"

class NavPanel extends Component {
    render() {
        return (
            <div>
                <Button text="Nav" onClick={() => {
                    console.log("hola at ya!!");
                    }}
                />
                <ul>
                    <li>Home</li>
                    <li>News Feed</li>
                    <li>Discover</li>
                </ul>
            </div>
        );
    }
}

export default NavPanel