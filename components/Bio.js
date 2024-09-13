import React from 'react';

const BioComponent = () => {
  const teamMembers = [
    {
      name: 'Joshua Dowell',
      image: '../media/joshua.gif',
      bio: 'Hello, my name is Joshua Dowell. I enjoy playing chess, taking walks, reading books, and solving puzzles.',
    },
    {
      name: 'Iizalaarab Elhaimeur',
      image: '../media/izzy.jpg',
      bio: "I'm Izzy, a tech enthusiast fascinated by computers and machine intelligence. I enjoy reading literature and manga, with Blame! being one of my favorites. When I'm not messing with code or reading something new, you can find me participating in game jams.",
    },
    {
      name: 'Durel Hairston',
      image: '../media/durel.jpg',
      bio: 'I find joy in the excitement of sports and the immersive realms of video games. I also like using my hands, such as improving my PC build and building Legos.',
    },
    {
      name: 'Darell Styles',
      image: '../media/darrel.jpg',
      bio: 'Hello! I\'m Darell Styles, a computer science major at ODU. My main hobbies include playing video games, watching movies, and hanging out with friends. My goal is to be the best team member, improve my coding, and learn new skills.',
    },
    {
      name: 'Dima Bochkarev',
      image: '../media/dima.jpg',
      bio: "I'm Dima, a senior computer science student at ODU. My hobbies are playing video games, drawing, reading and coding.",
    },
  ];

  return (
    <div className="bio-container">
      {teamMembers.map((member) => (
        <div className="bio-item" key={member.name}>
          <div
            className="bio-pic"
            style={{ backgroundImage: `url(${member.image})` }}
          />
          <h2 className="names">{member.name}</h2>
          <p className="bio-text">{member.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default BioComponent;
