import * as React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {Button} from "../../views/design/Button";
import Header from "../../views/Header";
import styled from "styled-components";
import {BaseContainer} from "../../helpers/layout";


const ProfileContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
`;

const Profile = styled.div`
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


const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Users = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



class UserProfile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            back: false
        };
    }




    render(){

        if (localStorage.getItem("token") === null || this.state.back ===true){
            return <Redirect to={"/game"} />;
        }

        return(
            <BaseContainer>

            <Header/>


                    <Label>Profile page</Label>


                    <PlayerContainer>
                    <Users>
                        Username
                    </Users>
                    </PlayerContainer>


                <PlayerContainer>
                    <Users>
                        Birthday
                    </Users>
                </PlayerContainer>


                <PlayerContainer>
                    <Users>
                        Status
                    </Users>
                </PlayerContainer>



                <PlayerContainer>
                    <Users>
                        Creation date
                    </Users>
                </PlayerContainer>



                    <Button width="100%" onClick={() => {this.setState({back: true})}} >
                        Back
                    </Button>



            </BaseContainer>
        );
    }


}
export default UserProfile;