import React from "react";
import { Login,Register } from "./components/login/index";
import "./App.scss";

class App extends React.Component {

      constructor(props){
            super(props);

            this.state ={
                  isLogin: true,
            }

      }

      changeState(){
            const{isLogin} = this.state;
            if(isLogin){
                  this.RightSide.classList.remove("right");
                  this.RightSide.classList.add("left");
            }
            else{
                  this.RightSide.classList.remove("left");
                  this.RightSide.classList.add("right");
            }

            this.setState((prevState) => ({isLogin : !prevState.isLogin}))
      }

      render() {
            const {isLogin} = this.state;
            const current = isLogin ? "Register" : "Login";
            const currentActive = isLogin ? "login" : "register";

            return (
                  <div className = "App">
                        <div className="login">
                              <div className = "loginContainer">
                                    {isLogin && (<Login containerRef = {(ref) => this.current = ref }/>) }
                                    {!isLogin && (<Register containerRef = {(ref) => this.current = ref }/>) }
                              </div>
                              <RightSide current = {current} containerRef = {ref => this.RightSide = ref} onClick = {this.changeState.bind(this)}/>
                        </div>
                  </div>
            )
      }

}

const RightSide = props => {
      return <div className = "right-side" ref = {props.containerRef} onClick = {props.onClick}>
            <div className = "inner-container">
                  <div className = "text">
                        {props.current}
                  </div>

                  </div>
            </div>
}

export default App;
