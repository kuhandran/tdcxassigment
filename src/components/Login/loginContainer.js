import { connect } from 'react-redux';
import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import './loginContainer.css';
import { Redirect } from 'react-router';
import axios from "axios";

import store from "../../reducers/store"

export class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            auth: false
        };
    }

    onUpdateIDInformation = (event) => {
        this.setState({ id: event.target.value })
    }
    onUpdateNameInformation = (event) => {
        this.setState({ name: event.target.value })
    }
      
    navigation = async () => {
        const data = {
            id:this.state.id,
            name:this.state.name
        }
        axios.post("http://localhost:3001" + "/login", data)
            .then(function (response) {
                if (response.data) {
                    store.dispatch({
                        type: "LOGIN_DATA",
                        payload: response.data
                    })
                }

            })
       this.setState({auth:true});
    };

    render() {

        if (this.state.auth) {
            return <Redirect to={"/Dashboard"} />
        } else {
            let location = window.location.pathname;
            let path = location.split("/");
            if (path[1] != "Login") {
                return <Redirect to={"/Login"} />
            }
        }

        return (
            <div className="Login-Container">
                <Card className="Login-cards">
                    <Card.Body>
                        <Card.Title className="Login-cards-title" >Login</Card.Title>
                        <Form>
                            <div className={`${"Login-elements-Padding"}`} >
                                <input
                                    className={`${"Login-cards-Text"} ${"form-control form-control-lg"}`}
                                    type="text"
                                    id="id"
                                    placeholder="id"
                                    value={this.state.id}
                                    onChange={this.onUpdateIDInformation}
                                    aria-label=".form-control-lg example" />
                            </div>
                            <div className={`${"Login-elements-Padding"}`} >
                                <input
                                    className={`${"Login-cards-Text"} ${"form-control form-control-lg"} `}
                                    type="text"
                                    id="name"
                                    placeholder="name"
                                    value={this.state.name}
                                    onChange={this.onUpdateNameInformation}
                                    aria-label=".form-control-lg example" />
                            </div>
                            <Button
                                type="button"
                                className={` ${"Login-button-Padding"} ${"btn btn-primary btn-lg"}`}
                                onClick={() => this.navigation()}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//       Login: state.Login
//     };
// }

// export default connect(mapStateToProps)(LoginContainer);