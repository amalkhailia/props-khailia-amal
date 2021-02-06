import React from 'react'
import "./Profile.css";
import FullName from "./FullName"
import Profession from "./Profession"
import Bio from "./Bio"


const ProfileComponent = () => {
    const handleName = (name) => {
        alert(`welcome ${name}`);
         
    };
    return (
        <div className="ProfileComponent">
            <div className="Card">
            <FullName name ="Khailia Amal">
            <div className="upper-container">
      <div className="image-container">
            <img src="../amal.jpg" alt="amal" />
      </div>
    </div>
            </FullName>
            <Profession profession=" JavaScript developer"/>
            <Bio mybio ="  I am 25 years old I was a student at ISET Bizerte, 
             I did an Applied bachelor's degree in computer technology.
            I have a professional experience of one year. 
            I like reading and development"
            HandleData ={handleName}/>

           
        </div>
        </div>
    )
}

export default ProfileComponent
