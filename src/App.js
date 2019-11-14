import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainTitle from "./MainTitle/MainTitle";
import MainContents from "./Routes/home/MainContents/MainContents";
import MainHelper from "./MainHelper/MainHelper";
import LoginForm from "./Routes/LoginForm/LoginForm";
import {Women} from "./Routes/Women/Women";
import {Men} from "./Routes/Men/Men";
import {Denim} from "./Routes/Denim/Denim";
import {Bag} from "./Routes/Bag/Bag";
import {Sale} from "./Routes/Sale/Sale";
import {EventContents} from "./Routes/EventContents/EventContents";

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
                    <Route path="/women/:subMenu" component={Women}/>
                    <Route path="/men/:subMenu" component={Men}/>
                    <Route path="/denim/:subMenu" component={Denim}/>
                    <Route path="/bag/:subMenu" component={Bag}/>
                    <Route path="/sale/:subMenu" component={Sale}/>
                    <Route path="/Event/:subMenu" component={EventContents}/>
                    <PrivateRoute authed={this.state.authed} path="/user" component={LoginForm}/>
                    <Route path="/login" component={(props) => <LoginForm {...props} authed={this.state.authed}/>}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
