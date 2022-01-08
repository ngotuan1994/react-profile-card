import React from 'react';
import "./profile-card.styles.scss";
import { Link } from 'react-router-dom';
import Profile_Picture from "../../assets/profilepicture.jpg";
const ProfileCard = (props) => {
  return (
    <div className='profile-card'>
      <div className="profile-card_image">
        <img src={Profile_Picture} alt="Profile Picture" />
      </div>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <div className="profile-card_social-media">
        <Link to="/"><i class="fab fa-facebook"></i></Link>
        <Link to="/"><i class="fab fa-youtube"></i></Link>
        <Link to="/"><i class="fab fa-github"></i></Link>
        <Link to="/"><i class="fab fa-twitter"></i></Link>
      </div>
      <Link to="/" className="contact-btn"> Contact Me</Link>
    </div>
  );
};

export default ProfileCard;
