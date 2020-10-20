import React from 'react';
import Header from '../Header/Header';
import charactersProject from '../../assets/images/CharactersList.png';
import CocktailAlchimia from '../../assets/images/CocktailAlchimia.png';
import AGP from '../../assets/images/AGP.png';
import Porto from '../../assets/images/Porto.png';
import myWeather from '../../assets/images/myWeather.png';
import Windbnb from '../../assets/images/Windbnb.png';
import RecipePage from '../../assets/images/RecipePage.png';
import TakeALook from '../../assets/images/TakeaLook.png';
import './Portfolio.css';

const Portfolio = () => {

  const projects = [
    {
      id: 0,
      title: "Associação Guias de Portugal",
      description: "Implementation of the front-end and back-end of the client’s new website. Also a Backoffice was design and developed by us to meet the client’s needs to update the website content.",
      image: AGP,
      date: "May ~ October 2020",
      keywords: "HTML, CSS, Bootstrap, JavaScript, React, Responsive, Backoffice, NodeJs, Nodemailer, Express, mySQL, Github, Git, VSCode, Project, Freelance, Remote, Full-stack",
      link: "https://agp-projeto-heroku.herokuapp.com/"
    },
    {
      id: 1,
      title: "Discover Porto!",
      description: "Responsive website development about the city of Porto. The user can explore what the city has to offer from restaurants, hotels, monuments, event, among other informations.",
      image: Porto,
      date: "February 2020",
      keywords: "HTML, CSS, Bootstrap, JavaScript, Responsive, Github Pages, Github, Git, VSCode, Project, Remote, Front-end",
      link: "https://margsousa.github.io/wcsPorto/"
    },
    {
      id: 2,
      title: "Cocktail Alchimia",
      description: "Dynamic webapp where the user can search by ingredient or drink name and it is offered a list of recipes that can then be shared with friends by email or social media.",
      image: CocktailAlchimia,
      date: "March 2020",
      keywords: "HTML, CSS, Bootstrap, JavaScript, React, API, Responsive, Netlify, Github, Git, VSCode, Project, Remote, Front-end",
      link: "https://cocktailalchimia.netlify.app/"
    },
    {
      id: 3,
      title: "Medication Reminder",
      description: "Dynamic webapp where the user can search by ingredient or drink name and it is offered a list of recipes that can then be shared by email or social media.",
      image: charactersProject,
      date: "May 2020",
      keywords: "HTML, CSS, JavaScript, React, API, Responsive, Github, Git, VSCode, Project, Hackathon, Remote, Full-stack",
      link: ""
    },
    {
      id: 4,
      title: "Take a Look",
      description: "Hackathon “Travel from your couch” app development in 36h using an API. The user can virtually travel around the world by choosing one of 101 webcams available from 101 countries.",
      image: TakeALook,
      date: "April 2020",
      keywords: "HTML, CSS, Bootstrap, JavaScript, React, API, Github Pages, Responsive, Github, Git, VSCode, Project, Hackathon, Remote, Front-end",
      link: "https://antoniobranco-coder.github.io/Hackaton1/"
    },
    {
      id: 5,
      title: "myWeather",
      description: "Weather react app development. The user is given a weekly forecast of their current location but it can also search the weather of all over the world. The temperature can also be displayed in degrees Celsius or degrees Fahrenheit.",
      image: myWeather,
      date: "June 2019",
      keywords: "HTML, CSS, Bootstrap, JavaScript, React, Responsive, Netlify, Github, Git, VSCode, Front-end",
      link: "https://margsousa-myweather-reactapp.netlify.app/"
    },
    {
      id: 6,
      title: "Windbnb",
      description: "DevChallenge to create a responsive small version of Airbnb using a mockup and given data. The user can see all available properties in Finland, filter by city and number of guests.",
      image: Windbnb,
      date: "October 2020",
      keywords: "HTML, CSS, JavaScript, React, Responsive, Github, Git, VSCode, Netlify, Practice, DevChallenges, Front-end",
      link: "https://gifted-fermat-2e3857.netlify.app/"
    },
    {
      id: 7,
      title: "Recipe Page",
      description: "DevChallenge to create a responsive recipe page following the given mockup. The user can see the recipe instructions, ingredients, times and can check if it has all the ingredients.",
      image: RecipePage,
      date: "October 2020",
      keywords: "HTML, CSS, JavaScript, React, Responsive, Github, Git, VSCode, Netlify, Practice, DevChallenges, Front-end",
      link: "https://frosty-villani-8a8b7f.netlify.app/"
    },
    {
      id: 8,
      title: "Characters List",
      description: "Practice challenge to develop a responsive list using React and Redux where the user can create, add and delete characters from the list.",
      image: charactersProject,
      date: "October 2020",
      keywords: "HTML, CSS, Bootstrap, Modal, JavaScript, React, Redux, Responsive, Github, Git, VSCode, Practice, Front-end",
      link: "https://margsousa-redux-characters-list.netlify.app"
    },
  ]

  const filters = ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Redux", "Responsive", "Project", "Client",
  "Remote", "Git", "Github", "Netlify", "Github Pages", "NodeJs", "Express", "Freelance", "VSCode", "Front-End", "Full-stack"]
  

  return (
    <div className="Portfolio">
      <Header />
      <div className="portfolio-section">
        <div className="portfolio-main">
          <div className="portfolio-title">Projects</div>
          <div className="portfolio-subtitle">Filter by:</div>
          <div className="portfolio-filters">
            {filters.map( button => 
              <button>{button}</button>
            )}
          </div>
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