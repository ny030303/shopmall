import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainTitle from "./MainTitle/MainTitle";
import MainBody from "./Routes/home/MainBody/MainBody";
import MainContents from "./Routes/home/MainContents/MainContents";
import MainHelper from "./MainHelper/MainHelper";
import SPTitle from "./Component/ShopPage/SPTitle/SPTitle";
import ShopContents from "./Component/ShopPage/ShopContents/ShopContents";
import LoginForm from "./Routes/home/LoginForm/LoginForm";
import {Women} from "./Routes/Women/Women";
import {Men} from "./Routes/Men/Men";

const PrivateRoute = ({component: Component, authed, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            (authed === true) ?
                (<Component {...props} />) :
                (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
        }
    />
);

class App extends React.Component {
    state = {
        authed: false,
        loginUser: null,
        buttonColor: "black"
    };

    componentDidMount() {
        console.log("loaded...");
    }

    changeColor = (e) => {
        console.log(e.target.dataset.color);
        this.setState({buttonColor: e.target.dataset.color})
    };

    render() {
        return (
            <HashRouter>
                <MainTitle/>
                <MainHelper/>
                <Switch>
                    <Route exact path="/" component={MainContents}/>
                    <Route path="/women/:submenu" component={Women}/>
                    <Route path="/man" component={Men}/>
                    <Route path="/man" component={Men}/>
                    <Route path="/man" component={Men}/>
                    <Route path="/man" component={Men}/>
                    <Route path="/man" component={Men}/>
                    <PrivateRoute authed={this.state.authed} path="/user" component={LoginForm}/>
                    <Route path="/login" component={(props) => <LoginForm {...props} authed={this.state.authed}/>}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
