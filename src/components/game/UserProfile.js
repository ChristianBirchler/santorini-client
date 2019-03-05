import * as React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {Button} from "../../views/design/Button";
import Header from "../../views/Header";
import styled from "styled-components";
import {BaseContainer} from "../../helpers/layout";





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



                    <Button width="100%" onClick={() => {this.setState({back: true})}} >
                        Back
                    </Button>



            </BaseContainer>
        );
    }


}
export default UserProfile;