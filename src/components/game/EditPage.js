import * as React from "react";
import {BaseContainer} from "../../helpers/layout";
import {Button} from "../../views/design/Button";
import styled from "styled-components";
import {getDomain} from "../../helpers/getDomain";
import UserProfile from "./UserProfile";


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
  width: 90%;
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
  width: 100%;
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


/**
 * @return {null}
 */
function Error(props) {

    if (props.err === true){
        return <h3>Wrong credentials</h3>;
    }

    return null;

}






class EditPage extends React.Component{

    /*
    props: user
     */


    constructor(props) {
        super(props);
        this.state = {
            newUsername: null,
            newBirthdayDD: null,
            newBirthdayMM: null,
            newBirthdayYYYY: null,
            newPassword: null
        };

    }


    handleInputChange(key, value){
        this.setState({[key]: value});
    }


    updateProfile(){

    }



    render() {
        return(
            <BaseContainer>

                <h1>Edit page</h1>

                <FormContainer>
                    <Form>


                        <Label>Username</Label>
                        <InputField onChange={e => this.handleInputChange("newUsername", e.target.value)}
                            placeholder="Enter here.."

                        />

                        <Label>Birthday</Label>
                        <InputField onChange={e => this.handleInputChange("newBirthdayDD", e.target.value)}
                                    placeholder={"DD"} />

                        <InputField onChange={e => this.handleInputChange("newBirthdayMM", e.target.value)}
                            placeholder={"MM"} />

                        <InputField onChange={e => this.handleInputChange("newBirthdayYYYY", e.target.value)}
                            placeholder={"YYYY"} />

                        <Label>Password</Label>
                        <InputField onChange={e => this.handleInputChange("newPassword", e.target.value)}
                            type={"password"}
                            placeholder="Enter here.."

                        />



                        <ButtonContainer>
                            <Button
                                onClick={() => this.updateProfile()}
                                width="100%"

                            >
                                Update
                            </Button>


                        </ButtonContainer>


                    </Form>
                </FormContainer>

            </BaseContainer>
        );
    }


}

export default EditPage;