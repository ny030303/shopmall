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
import MainFooter from "./MainFooter/MainFooter";
import DetailClothesContents from "./Component/DetailClothesContents/DetailClothesContents";


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
            <div style={{height:"100%",position:"relative"}}>
            <HashRouter>
                <MainTitle/>
                <MainHelper/>
                <Switch>
                    <Route exact path="/" component={MainContents}/>
                    <Route path="/women/:subMenu" component={Women}/>
                    <Route path="/men/:subMenu" component={Men}/>
                    <Route path="/denim/:subMunu" component={Denim}/>
                    <Route path="/bag/:subMunu" component={Bag}/>
                    <Route path="/sale/:subMunu" component={Sale}/>
                    <Route path="/Event/:subMunu" component={EventContents}/>
                    <PrivateRoute authed={this.state.authed} path="/user" component={LoginForm}/>
                    <Route path="/login" component={(props) => <LoginForm {...props} authed={this.state.authed}/>}/>
                    <Route path="/detailClothes/:data" component={DetailClothesContents}/>
                </Switch>
                <MainFooter/>
            </HashRouter>
            </div>
        );
    }
}

export default App;
