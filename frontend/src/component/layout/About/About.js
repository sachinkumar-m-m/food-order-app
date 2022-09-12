import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import { useEffect } from "react";
import Aos from "aos";


const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  

 
  return (
     <div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1" data-aos="fade-down">About Us</Typography>


        <div className="row">

          <div className="col-md-4">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.istockphoto.com/id/504754434/photo/boy-at-an-ice-cream-shop.webp?s=612x612&w=is&k=20&c=k0c8Fst5z7mryWMoBU4jZG_SeHIBWnhCSZMMCTgkuN8="
              alt="Founder"
            />
            
            <Typography>Choose Your Favorite</Typography>
            <Button  color="primary">
            Choose your favorite meals and order online or by phone. It's easy
            to customize your order.
            </Button>
          </div>

          <div className="col-md-4">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://thumbs.dreamstime.com/b/delivery-man-stand-holding-goods-parcel-front-motorbike-going-to-fast-express-deliver-food-product-customer-175076956.jpg"
              alt="Founder"
            />
            
            <Typography>We Deliver Your Meals</Typography>
            <Button  color="primary">
            We prepared and delivered meals arrive at your door. Duis autem vel
            eum iriure dolor in hendrerit in vulputate.
            </Button>
          </div>

          <div className="col-md-4">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://img.huffingtonpost.com/asset/5836c92d180000230c30fd67.jpeg?cache=3XE6CstWMu&ops=1778_1000"
              alt="Founder"
            />
            <Typography>Eat And Enjoy</Typography>
            <Button  color="primary">
            No shooping, no cooking, no counting and no cleaning. Enjoy your
            healthy meals with your family.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
