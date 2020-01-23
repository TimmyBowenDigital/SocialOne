import * as React from "react";
import { Form } from "./form";
import { Field } from "./field";

export const PostForm: React.SFC = () => {
    return (
        <Form action="http://localhost:4351/api/submitpost"
            render={() => (
                <React.Fragment>
                    <div className="alert alert-info" role="alert">
                        Enter the details of your post, so people can see it
                    </div>
                    <Field id="name" label="Name" />
                    <Field id="email" label="Email" />
                    <Field
                        id="reason"
                        label="Reason"
                        editor="dropdown"
                        options={["", "Marketing", "Support", "Feedback", "Jobs"]}
                        />
                        <Field id="notes" label="Notes" editor="multilinetextbox" />
                </React.Fragment>
            )}
        />
    );
};

export default PostForm