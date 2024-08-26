import React from 'react';
import SocialIcons from '../Auth/SocialIcons';

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <div className="card">
        <div className="img-container">
          <img src={member.imageUrl} alt={member.name} />
        </div>
        <h4>{member.name}</h4>
        <p>{member.position}</p>
        <SocialIcons 
          github={member.socialLinks.github} 
          instagram={member.socialLinks.instagram} 
          facebook={member.socialLinks.facebook} 
          google={member.socialLinks.google}
        />
      </div>
    </div>
  );
};

export default TeamMember;
