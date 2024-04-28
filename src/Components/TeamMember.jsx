import React from 'react'
import member1 from '../member1.jpg'
import member2 from '../member2.jpg'
import member3 from '../member3.jpg'
import member4 from '../member4.jpg'
import member5 from '../member5.jpg'
import member6 from'../ai_member.jpg'
import member7 from'../member7.jpg'
import member8 from'../member8.jpg'
import './TeamMember.css'
const teamMembers = [
  {
    imgUrl: member1,
    name: "Ahmed Abdelwahed",
    position: "Back-End developer",
  },

  {
    imgUrl: member2,
    name: "Malek",
    position: "Back-End developer",
  },

  {
    imgUrl: member3,
    name: "Ismail",
    position: "Flutter developer",
  },

  {
    imgUrl: member4,
    name: "Amr",
    position: "Business Analysis",
  },
  {
    imgUrl: member5,
    name: "Mariam Emad",
    position: "Front-End developer",
  },

  {
    imgUrl: member7,
    name: "Hoda Youssef",
    position: "UI-UX designer",
  },
  {
    imgUrl: member6,
    name: "Shams Gamal",
    position: "Ai developer",
  },
  {
    imgUrl: member8,
    name: "Mohamed Fathy",
    position: "Flutter developer",
  },
];

const TeamMember = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h2 className="subtitle">Our Team</h2>
          
        </div>
        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-line"></i>
                  </span>
                  <span>
                    <i class="ri-facebook-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;

