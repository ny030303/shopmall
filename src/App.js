import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import MainTitle from "./MainTitle/MainTitle";
import MainContents from "./Routes/home/MainContents/MainContents";
import MainHelper from "./MainHelper/MainHelper";
import LoginForm from "./Routes/LoginForm/LoginForm";
import {Women} from "./Routes/Women/Women";
import {Men} from "./Routes/Men/Men";
import {Denim} from "./Routes/Denim/Denim";
import {Bag} from "./Routes/Bag/Bag";
import MainFooter from "./MainFooter/MainFooter";
import DetailClothesContents from "./Component/DetailClothesContents/DetailClothesContents";
import OrderSheetPage from "./Component/OrderSheetPage/OrderSheetPage";
import {ShoppingBagPage} from "./Component/ShoppingBagPage/ShoppingBagPage";
import SignUpForm from "./Routes/SignUpForm/SignUpForm";
import MyPage from "./MyPage/MyPage";
import {getUsers, logout} from "./services/DataService";
import alertDialog from "./services/AlertDialog";
import eventService from "./services/EventService";


const PrivateRoute = ({component: Component, authed, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      (authed === true) ?
        (<Component {...props} />) :
        (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
    }/>
);

class App extends React.Component {
  state = {
    authed: false,
    loginUser: null,
    buttonColor: "black"
  };

  componentDidMount() {
    eventService.listenEvent("logout", res => this.logout());
    console.log("loaded...");
    getUsers(null, null, res => {
      console.log(res);
      if (res.result == 1) {
        this.setState({authed: true, loginUser: res.users});
      }
    });
  }

  onUserLogin = (auth, users) => {
    console.log(auth);
    this.setState({authed: auth, loginUser: users});
  };

  logout = () => {
      logout();
      alertDialog.show("로그아웃", "정상적으로 로그아웃 됐습니다");
      this.setState({authed: false, loginUser: null});
  };

  render() {
    return (
      <div style={{height: "100%", position: "relative"}}>
        <HashRouter>
          <MainTitle/>
          <MainHelper/>
          <Switch>
            <Route exact path="/" component={MainContents}/>
            <Route path="/women/:subMenu" component={Women}/>
            <Route path="/men/:subMenu" component={Men}/>
            <Route path="/denim/:subMenu" component={Denim}/>
            <Route path="/bag/:subMenu" component={Bag}/>
            {/*<Route path="/sale/:subMenu" component={Sale}/>*/}
            {/*<Route path="/Event/:subMenu" component={EventContents}/>*/}
            <Route path="/login" component={(props) =>
              <LoginForm {...props} authed={this.state.authed} onUserLogin={this.onUserLogin}/>}/>
            <PrivateRoute authed={this.state.authed} path="/detailClothes/:pid" component={DetailClothesContents}/>
            <Route path="/OrderSheet" component={OrderSheetPage}/>
            <Route path="/ShoppingBag" component={ShoppingBagPage}/>
            <Route path="/SignUp" component={SignUpForm}/>
            <PrivateRoute authed={this.state.authed} path="/MyPage" component={(props) =>
              <MyPage {...props} logout={this.logout}/>}/>
            {/*<Route path="/MyPage" component={MyPage}/>*/}
          </Switch>
          <MainFooter/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
