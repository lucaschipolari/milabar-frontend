import React from "react";
import TeamMemberSocialIcons from "./TeamMemberSocialIcons";

const TeamMember = ({ member }) => {
  return (
    <div className="team-member col-12 col-md-6 g-5">
      <div className="card-member">
        <div className="img-team-container">
          <img src={member.imageUrl} alt={member.name} />
        </div>
        <h4>{member.name}</h4>
        <p>{member.position}</p>
        <TeamMemberSocialIcons
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
