import React from "react";
import "./Contact.css";
import { Button, Typography, Avatar } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              alt="Founder"
            /> 
            <h1>Ice Parlour Manager</h1>
        <h4 >Name : SachinKumar</h4> 
        <h4>Email : sachindwd@gmail.com</h4> 
        <h4>Number : 9164897910</h4>
    </div>
  );
};

export default Contact;
