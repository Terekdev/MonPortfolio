import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <>
    <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/adolescent.png"
            alt="adolescent"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Bonjour ! Je suis <strong>Kailyan THERESINE</strong>. Je suis un développeur web junior. Je sors d'une formation diplomante Intégrateur Web chez OpenClassrooms. Au cours de cette formation, j'ai pu apprendre et enrichir mes connaissances techniques & technologiques mais aussi mes qualités humaines. Je suis motivé par les défis techniques et je m'engage à fournir des solutions innovantes et performantes qui répondent aux besoins spécifiques de mes clients.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            J'ai réalisé 11 projets pendant cette formation. Mon attirance pour le codage et plus particulièrement pour la création de site web est apparu après l'obtention de mon BAC STI2D. Après ça, je me suis orienté vers un BTS SNIR qui ne m'a pas vraiment plu car c'était axé réseau.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              J'ai réalisé une grande variété de projets web, allant de simples sites web vitrines à des applications web complexes. Mes réalisations les plus remarquables sont dans la partie "Projets"
              <div className="tagline2">
              Voici les différentes technologies que j'ai pu utilisé au cours de ma formation ou autre:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
          
        </div>
      </div>
    </ContactWrapper>
    </>
  );
}

export default About;
