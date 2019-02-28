import {Component} from "react";
import React from "react";
import {BaseContainer} from "../../helpers/layout";
import {Button} from "../../views/design/Button";
import Header from "../../views/Header";
import styled from "styled-components";
import Redirect from "react-router-dom/es/Redirect";
import {getDomain} from "../../helpers/getDomain";




const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 420px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 5px;
  background: linear-gradient(rgb(27, 124, 186), rgb(2, 46, 101));
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;





class Register extends Component{

    constructor(){
        super();
        this.state = {
            name: null,
            username: null,
            password: null,
            toLogin: false
        };

        this.toLogin = this.toLogin.bind(this);
        this.register = this.register.bind(this);
    }



    handleInputChange(key, value) {
        this.setState({ [key]: value });
    }


    toLogin(){
       this.setState({toLogin: true})
    }

    register(){

        fetch(`${getDomain()}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(resp => (resp.json()));




    }



    render() {

        if(this.state.toLogin === true){
            return <Redirect to={"/login"} />
        }



        return(


            <BaseContainer>

                <Header/>


                <FormContainer>
                    <Form>

                        <Label>Name</Label>
                        <InputField
                            placeholder="Enter here.."
                            onChange={e => {
                                this.handleInputChange("name", e.target.value);
                            }}
                        />



                        <Label>Username</Label>
                        <InputField
                            placeholder="Enter here.."
                            onChange={e => {
                                this.handleInputChange("username", e.target.value);
                            }}
                        />


                        <Label>Password</Label>
                        <InputField
                            placeholder={"Enter here.."}
                            onChange={e => {this.handleInputChange("password", e.target.value)}}
                        />




                        <ButtonContainer>

                            <Button
                                width={"50%"}
                                disabled={!this.state.username || !this.state.name || !this.state.password}
                                onClick={this.register}
                            >Register</Button>

                        </ButtonContainer>

                        <ButtonContainer>
                            <Button
                                width={"50%"}
                                onClick={this.toLogin}
                            >Back to Login</Button>
                        </ButtonContainer>


                    </Form>
                </FormContainer>
            </BaseContainer>

        );

    }


}

export default Register;