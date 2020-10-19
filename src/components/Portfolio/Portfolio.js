import React from 'react';
import Header from '../Header/Header';
import charactersProject from '../../assets/CharactersRedux2.png';
import CocktailAlchimia from '../../assets/CocktaillAlchimia.png';
import './Portfolio.css';

const Portfolio = () => {

  const projects = [
    {
      id: 0,
      title: "Associação Guias de Portugal",
      description: "Implementation of the front-end and back-end of the client’s new website. A Backoffice was design and developed by us to meet the client’s needs to update the website content.",
      image: charactersProject,
      date: "May ~ October 2020",
      keywords: "HTML, CSS, Bootstrap, JavaScript, React, Responsive, Backoffice, NodeJs, Nodemailer, Express, mySQL, Heroku, Github, Git, VSCode, Project, Freelance, Remote",
      link: ""
    },
    {
      id: 1,
      title: "Discover Porto!",
      description: "Responsive website development about the city of Porto. The user can explore what the city has to offer from restaurants, hotels, monuments, event and others.",
      image: charactersProject,
      date: "February 2020",
      keywords: "HTML, CSS, Bootstrap, JavaScript, Responsive, Github Pages, Github, Git, VSCode, Project, Remote",
      link: ""
    },
    {
      id: 2,
      title: "Cocktail Alchimia",
      description: "Dynamic webapp where the user can search by ingredient or drink name and it is offered a list of recipes that can then be share by email or social media.",
      image: CocktailAlchimia,
      date: "March 2020",
      keywords: "HTML, CSS, Bootstrap, JavaScript, React, API, Responsive, Netlify, Github, Git, VSCode, Project, Remote",
      link: "https://cocktailalchimia.netlify.app/"
    },
    {
      id: 3,
      title: "Take a Look",
      description: "Responsive React App development using an API in 36h with the theme “Travel from your couch”. The user can virtually travel around the world by choosing one of 101 webcams available from 101 countries.",
      image: charactersProject,
      date: "April 2020",
      keywords: "HTML, CSS, Bootstrap, JavaScript, React, API, Github Pages, Responsive, Github, Git, VSCode, Project, Hackathon, Remote",
      link: "https://antoniobranco-coder.github.io/Hackaton1/"
    },
    {
      id: 4,
      title: "Medication Reminder",
      description: "Dynamic webapp where the user can search by ingredient or drink name and it is offered a list of recipes that can then be share by email or social media.",
      image: charactersProject,
      date: "March 2020",
      keywords: "HTML, CSS, JavaScript, React, API, Responsive, Github, Git, VSCode, Project, Hackathon, Remote",
      link: ""
    },
    {
      id: 5,
      title: "Character List App",
      description: "Create and add new characters to the list or delete the ones you don't want.",
      image: charactersProject,
      date: "February 2020",
      keywords: "HTML, CSS, JavaScript, React, Redux, Responsive, Github, Git, VSCode",
      link: ""
    }
  ]


  return (
    <div className="Portfolio">
      <Header />
      <div className="portfolio-section">
        <div className="portfolio-main">
          <div className="portfolio-title">Projects</div>
          <div className="portfolio-subtitle">Filter by:</div>
          <div className="portfolio-list">
            {projects.map((project) => 
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-date">{project.date}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-keywords">Keywords: {project.keywords}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Portfolio;