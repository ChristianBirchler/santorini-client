import * as React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {Button} from "../../views/design/Button";
import Header from "../../views/Header";
import styled from "styled-components";
import {BaseContainer} from "../../helpers/layout";
import EditPage from "./EditPage";
import {getDomain} from "../../helpers/getDomain";



const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;



const EntryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Property = styled.div`
    color: white;
`;

const Value = styled.div`
    color: #42f4e8;
    font-size: 35px;
`;






const EditGuard = props => {
    if (localStorage.getItem("token") === props.token) {
        return props.children;
    }else{
        return <div></div>;
    }
};





class UserProfile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            back: false,
            edit: false
        };
    }




    render(){

        if (localStorage.getItem("token") === null || this.state.back ===true){
            return <Redirect to={"/game"} />;
        }

        if (this.state.edit === true){
            return <EditPage user={this.props.user}/>
        }


        return(
            <BaseContainer>

            <Header/>


                    <Label>Profile page</Label>


                    <EntryContainer>
                    <Property>
                        Username
                    </Property>

                        <Value>
                        {this.props.user.username}
                        </Value>
                    </EntryContainer>


                <EntryContainer>
                    <Property>
                        Birthday
                    </Property>

                    <Value>
                    {this.props.user.birthday}
                    </Value>
                </EntryContainer>


                <EntryContainer>
                    <Property>
                        Status
                    </Property>
                    <Value>
                    {this.props.user.status}
                    </Value>
                </EntryContainer>



                <EntryContainer>
                    <Property>
                        Creation date
                    </Property>
                    <Value>
                    {this.props.user.creationDate}
                    </Value>
                </EntryContainer>


                <EditGuard token={this.props.user.token}>
                <ButtonContainer>
                <Button width={"100%"} onClick={() => this.setState({edit: true})}>Edit</Button>
                </ButtonContainer>
                </EditGuard>

                <ButtonContainer>

                    <Button width="100%" onClick={() => {this.setState({back: true})}} >
                        Back
                    </Button>

                </ButtonContainer>



            </BaseContainer>
        );
    }


}
export default UserProfile;