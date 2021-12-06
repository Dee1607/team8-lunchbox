import React from 'react';
import '../css/Styles.css';
import Navbar from './Navbar';

function Profile() {
    return (

        <div className="cont-profile">
            <Navbar/>
            <form method="">
                <div className="row">
                    <div className="col-md-4" >
                        <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" class="img-thumbnail" alt="display" />
                    </div>


                    <div className="col-md-6">
                        <div className="profile-head">
                            <h3>Email:</h3>
                            <h3>Name:</h3>
                            <h3>subscription:</h3>
                        </div>

                        <div >
                            <div>
                                <button type="button" className="button button3">Cancel Subscription</button>
                            </div>
                        </div>

                    </div>

                </div>
            </form>

        </div>
    )
}
    

export default Profile
