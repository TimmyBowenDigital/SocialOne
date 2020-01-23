import React from "react";

function Post(Post: any) {
    return (
        <div className={'Post'}>
            <div className={'UserInfo'}>
                <img className={'UserPicture'}
                    src={Post.User.UserPicture}
                     alt={Post.User.Name}
                />
            </div>
            <div className={'UserInfo-Name'}>
                {Post.User.Name}
            </div>
            <div className={'CommentText'}>
                {Post.Text}
            </div>
            <div className={'CommentDate'}>
                {Post.Date}
            </div>
        </div>
    )
}

export default Post