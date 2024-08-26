import React from 'react';
import TeamMember from '../components/TeamMember/TeamMember';
import '../components/TeamMember/styles/TeamMember.css';
import hernan from '../assets/hernan.jpg';
import santi from '../assets/santi.jpg';
import lucas from '../assets/lucas.jpg';
import juli from '../assets/juli.jpg';

const teamMembers = [
  {
    name: 'Lucas Chipolari',
    position: 'Scrum Master',
    imageUrl: lucas,
    socialLinks: {
      facebook: 'https://facebook.com',
      github: 'https://github.com/johnathan',
      instagram: 'https://instagram.com/johnathan',
      google: 'https://google.com'
    },
  },
  {
    name: 'Julieta Vignoli',
    position: 'Especialista en Marketing',
    imageUrl: juli,
    socialLinks: {
      facebook: 'https://facebook.com',
      github: 'https://github.com/johnathan',
      instagram: 'https://instagram.com/johnathan',
      google: 'https://google.com'
    },
  },
  {
    name: 'Hernan Alarcon',
    position: 'Gerente de Operaciones',
    imageUrl: hernan,
    socialLinks: {
      facebook: 'https://facebook.com',
      github: 'https://github.com/johnathan',
      instagram: 'https://instagram.com/johnathan',
      google: 'https://google.com'
    },
  },
  {
    name: 'Altamiranda Santiago',
    position: 'Jefe de Bar',
    imageUrl: santi,
    socialLinks: {
      facebook: 'https://facebook.com',
      github: 'https://github.com/johnathan',
      instagram: 'https://instagram.com/johnathan',
      google: 'https://google.com'
    },
  },
];

const AboutUsPage = () => {
  return (
    <div>
      <div className="title-container">
        <div className="title">
          <span>M</span>
          <span>I</span>
          <span>L</span>
          <span>A</span>
          <span>B</span>
          <span>A</span>
          <span>R</span>
        </div>
      </div>
      <section className="container company-description">
        <h2>MilaBar Staff</h2>
        <p>
    En MilaBar, somos apasionados por ofrecer a nuestros clientes una experiencia única. 
    Desde 2015, hemos servido los mejores tragos y platillos de la ciudad. Nuestro equipo 
    está compuesto por profesionales dedicados a brindar la mejor experiencia posible.
  </p>
  <p>
    Ya sea que estés buscando relajarte después de un largo día o celebrar un momento especial, 
    MilaBar es el lugar perfecto para hacerlo. Contamos con los mejores bartenders, 
    expertos en marketing y operaciones para garantizar que tu experiencia sea inolvidable.
  </p>
      </section>

      <div className="container">
        <div className="row">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
