import React from "react";
import "../css/header.css";
import "../css/main.css";
import background from "../assets/img/trinityBackgroundWhite.png";
import devon from "../assets/img/Devon_Marantz.jpg";
import emily from "../assets/img/emily-yang.png";
import scott from "../assets/img/Scott_Roberts.png";
import kevin from "../assets/img/Kevin_Amarbayar.jpg";
import ervin from "../assets/img/Ervin_Mitra.jpg";
import jon from "../assets/img/Jon_Azali.jpg";
import brock from "../assets/img/Brock_Jameson.png";

class MeetTheTeam extends React.Component {
  render() {
    return (
      <body background={background}>
        <section id="grid">
          <section id="devon" className="halfpics">
            <img src={devon} alt="Devon Marantz" />
            <ul id="title">
              <h3>Devon Marantz</h3>
              <li className="role">Role: Product Owner</li>
              <li className="fav">Favorite Aura: Imaginative</li>
              <li className="info">
                <a href="mailto: DMarantz@talentpath.com">Contact Me</a>
              </li>
            </ul>
          </section>

          <section className="halfpics">
            <img src={emily} alt="Emily Yang" />
            <ul id="title">
              <h3>Emily Yang</h3>
              <li className="role">Role: Scrum Master</li>
              <li className="fav">Favorite Aura: Exotic</li>
              <li className="info">
                <a href="mailto: EYang@talentpath.com">Contact Me</a>
              </li>
            </ul>
          </section>

          <section className="halfpics">
            <img src={scott} alt="Scott Roberts" />
            <ul id="title">
              <h3>Scott Roberts</h3>
              <li className="role">Role: Software Engineer</li>
              <li className="fav">Favorite Aura: Peaceful</li>
              <li className="info">
                <a href="mailto: SRoberts@talentpath.com">Contact Me</a>
              </li>
            </ul>
          </section>

          <section className="halfpics">
            <img src={kevin} alt="Kevin Amarbayar" />
            <ul id="title">
              <h3>Kevin Amarbayar</h3>
              <li className="role">Role: Software Engineer</li>
              <li className="fav">Favorite Aura: Lively</li>
              <li className="info">
                <a href="mailto: KAmarbayar@talentpath.com">Contact Me</a>
              </li>
            </ul>
          </section>

          <section className="halfpics">
            <img src={ervin} alt="Ervin Mitra" />
            <ul id="title">
              <h3>Ervin Mitra</h3>
              <li className="role">Role: Software Engineer</li>
              <li className="fav">Favorite Aura: Hipster</li>
              <li className="info">
                <a href="mailto: EMitra@talentpath.com">Contact Me</a>
              </li>
            </ul>
          </section>

          <section className="halfpics">
            <img src={jon} alt="Jonathan Azali" />
            <ul id="title">
              <h3>Jonathan Azali</h3>
              <li className="role">Role: Software Engineer</li>
              <li className="fav">Favorite Aura: Silly</li>
              <li className="info">
                <a href="mailto: JAzali@talentpath.com">Contact Me</a>
              </li>
            </ul>
          </section>

          <section className="halfpics">
            <img src={brock} alt="Brock Jameson" />
            <ul id="title">
              <h3>Brock Jameson</h3>
              <li className="role">Role: Software Engineer</li>
              <li className="fav">Favorite Aura: Groovy</li>
              <li className="info">
                <a href="mailto: BJameson@talentpath.com">Contact Me</a>
              </li>
            </ul>
          </section>
        </section>
      </body>
    );
  }
}

export default MeetTheTeam;
