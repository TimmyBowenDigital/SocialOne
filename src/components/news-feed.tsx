import React, { Component } from "react";
import Button from "./ui-elements/button";
import PostForm from "./ui-elements/post-form";

class NewsFeedPanel extends Component {
    render() {
        return (
            <div>
                <div>
                    <PostForm />
                </div>
            </div>
        );
    }
}

export default NewsFeedPanel