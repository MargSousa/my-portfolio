import React, { useState } from 'react';
import { projectsData, practiceProjectsData, filterOptionsData } from '../../assets/projects/projectsData';
import Header from '../Header/Header';
import './Portfolio.css';

const Portfolio = () => {
  
  const [nameFilters] = useState(filterOptionsData);
  const [ativeFilters, setAtiveFilters] = useState([]);
  const [projects, setProjects] = useState(projectsData);
  const [practiceProjects, setPracticeProjects] = useState(practiceProjectsData);

  const handleFilter = (event) => {
    const { id, name } = event.target;
    let allOptions = [...nameFilters];
    let activeOptions = [...ativeFilters];
    let projectsOptions = [...projects];
    let practiceOptions = [...practiceProjects];
    const optionSelected = activeOptions.includes(id);

    if (optionSelected) {
      activeOptions = activeOptions.filter(value => value !== id);
      allOptions.map((option) => {
        if(String(option.id) === id) { 
          option.status = "inactive"
        }
      })
      if (activeOptions.length === 0) {

      }
    } else {
      activeOptions.push(id);
      allOptions.map((option) => {
        if(String(option.id) === id) { 
          option.status = "active"
        }
      })
      projectsOptions = projectsOptions.filter(project =>
        project.keywords.includes(name) === true
      )
      practiceOptions = practiceOptions.filter(project =>
        project.keywords.includes(name) === true
      )
    }

    if (activeOptions.length === 0) {
      projectsOptions = projectsData;
      practiceOptions = practiceProjectsData;
    }

    setProjects(projectsOptions);
    setPracticeProjects(practiceOptions);
    setAtiveFilters(activeOptions);
  }


  return (
    <div className="Portfolio">
      <Header />
      <div className="portfolio-section">
        <div className="portfolio-main">
          <div className="portfolio-title">Projects</div>
          <div className="portfolio-filters">
            <span className="portfolio-subtitle">Filter by:</span>
            {nameFilters.map((button) => 
              <button key={button.id} name={button.title} id={button.id} onClick={handleFilter} className={button.status}>
                {button.title}
              </button>
            )}
          </div>
          <div className="portfolio-list">
            {projects.length > 0 ? projects.map((project) => 
              <div className="project-card" key={project.id}>
                <div className="project-title">{project.title}</div>
                <div className="project-date">{project.date}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-keywords">Keywords: {project.keywords}</div>
              </div>
            )
            : (<div>Coming soon...</div>)
            }
          </div>
          <div className="portfolio-title">Other Practice Projects</div>
          <div className="portfolio-list">
            {practiceProjects.length > 0 ? practiceProjects.map((project) => 
              <div className="project-card" key={project.id}>
                <div className="project-title">{project.title}</div>
                <div className="project-date">{project.date}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-keywords">Keywords: {project.keywords}</div>
              </div>
            )
            : (<div>Coming soon...</div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Portfolio;