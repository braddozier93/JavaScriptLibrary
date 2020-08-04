import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/powerbutton.jpg';


const Logout = (props) => {
    return(//technically javascript not html, 
        <div>
            <img id="Logout" className="logout" src={logoutPic} alt="power button" />
        </div>
    )
}

export default Logout;
