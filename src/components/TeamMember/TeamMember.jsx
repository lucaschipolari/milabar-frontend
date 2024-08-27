import TeamMemberSocialIcons from "./TeamMemberSocialIcons";
import PropTypes from "prop-types";
const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <div className="card-member">
        <div className="img-container">
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

TeamMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    socialLinks: PropTypes.shape({
      github: PropTypes.string,
      instagram: PropTypes.string,
      facebook: PropTypes.string,
      google: PropTypes.string,
    }),
  }).isRequired,
};
