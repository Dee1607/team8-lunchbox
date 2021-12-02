import React from "react";


export class Register extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return <div className ="base-container">
            <div className = "header">Register</div>
            <div className = "content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor = "username">Username</label>
                        <input type = "text" name = "username" placeholder = "username"/>
                        <label htmlFor = "email">Email</label>
                        <input type = "email" name = "username" placeholder = "email"/>
                        <label htmlFor = "password">Password</label>
                        <input type = "password" name = "password" placeholder = "password"/>
                        
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type= "button" className="btn"> Register </button>
            </div>
        </div>
    }

} 