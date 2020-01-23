import React, { Component } from "react";
import Button from "./ui-elements/button";
import {PostForm} from "./ui-elements/post-form"
import Post from "./ui-elements/post";

class NewsFeedPanel extends Component {
    render() {
        return (
            <div className={'container'}>
                <Post Post={"Testing"} />
            </div>
        );
    }
}

export default NewsFeedPanel