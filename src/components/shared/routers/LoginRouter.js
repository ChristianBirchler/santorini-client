import {Component} from "react";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import React from "react";
import Route from "react-router-dom/es/Route";
import Login from "../../login/Login";
import Register from "../../register/Register";
import Switch from "react-router-dom/es/Switch";


class LoginRouter extends Component{


    render() {
        return(
            <BrowserRouter>
                <Switch>

                    <Route path={"/login"} render={() => <Login/>}/>

                    <Route path={"/register"} render={() => <Register/>} />

                </Switch>
            </BrowserRouter>
        );
    }


}

export default LoginRouter;