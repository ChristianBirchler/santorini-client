import * as React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {Button} from "../../views/design/Button";
import Header from "../../views/Header";
import styled from "styled-components";
import {BaseContainer} from "../../helpers/layout";
import EditPage from "./EditPage";



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

const Users = styled.ul`
  color: white;
  list-style: none;
  padding-left: 0;
`;

const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
            return <EditPage />
        }


        return(
            <BaseContainer>

            <Header/>


                    <Label>Profile page</Label>


                    <PlayerContainer>
                    <Users>
                        Username
                    </Users>
                        {this.props.user.username}
                    </PlayerContainer>


                <PlayerContainer>
                    <Users>
                        Birthday
                    </Users>

                    {this.props.user.birthday}

                </PlayerContainer>


                <PlayerContainer>
                    <Users>
                        Status
                    </Users>

                    {this.props.user.status}

                </PlayerContainer>



                <PlayerContainer>
                    <Users>
                        Creation date
                    </Users>

                    {this.props.user.creationDate}

                </PlayerContainer>


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