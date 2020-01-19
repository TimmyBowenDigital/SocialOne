import * as React from "react";

interface IFormProps {
    action: string;
}

export interface IValues {
    [key: string]: any;
}

export interface IErrors {
    [key: string]: string;
}

export interface IFormState {
    values: IValues;

    errors: IErrors;

    submitSuccess?: boolean;
}

export class PostForm extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);

        const errors: IErrors = {};
        const values: IValues = {};
        this.state = {
            errors,
            values
        };
    }

    private haveErrors(errors: IErrors) {
        let haveError: boolean = false;
        Object.keys(errors).map((key: string) => {
            if (errors[key].length > 0) {
                haveError = true;
            }
        });
        return haveError;
    }

    private handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        if (this.validateForm()) {
            const submitSuccess: boolean = await this.submitForm();
            this.setState({ submitSuccess });
        }
    };

    private validateForm(): boolean {
        return true;
    }

    private async submitForm(): Promise<boolean> {
        return true;
    }

    public render() {
        const { submitSuccess, errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit} noValidate={true}>
                <div className="container">
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={this.haveErrors(errors)}>Submit</button>
                    </div>
                    { submitSuccess && (
                        <div className="alert alert-info" role="alert">The form was successfully submitted!! </div>
                    )}
                    {submitSuccess === false && this.haveErrors(errors) && (
                        <div className="alert alert-danger" role="alert">
                            Sorry, the form is invalid, Please review, adjust and try again
                        </div>
                    )}
                </div>
            </form>
        );
    }
}