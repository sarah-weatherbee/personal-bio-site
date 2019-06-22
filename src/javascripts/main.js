import '../styles/main.scss';
import projectsData from './helpers/data/projectsData';
import barbSiteShot from '../../assets/barb-site-shot.jpg';


// const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML += textToPrint;

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (projects) => {
  let domString = '';
  for (let i = 0; i < projects.length; i += 1) {
    domString += '<div class="projects">';
    domString += `<div class="project-title"><strong>${projects[i].Name}</strong></div>`;
    domString += `<div><img src=${projects[i].imageUrl} alt="screenshot"></div>`;
    domString += '<div class="project-info-text">';
    domString += `<div><strong>Description:</strong> ${projects[i].description}</div>`;
    domString += `<div>Technologies: ${projects[i].Technologies}</div>`;
    domString += `<div>Available ${projects[i].available}</div>`;
    domString += `<div>githubUrl: <a href=${projects[i].githubUrl}>Here</a></div>`;
    domString += `<div>githubUrl: <a href=${projects[i].githubUrl}>Here</a></div>`;
    domString += '</div>';
    domString += '</div>';
  }

  printToDom('projectsPage', domString);
};

const homePage = () => {
  document.getElementById('bioPage').style.display = 'block';
  document.getElementById('technologiesPage').style.display = 'block';
  document.getElementById('projectsPage').style.display = 'block';
};

const onlyBio = () => {
  document.getElementById('bioPage').scrollTo();
  document.getElementById('bioPage').style.display = 'block';
  document.getElementById('technologiesPage').style.display = 'none';
  document.getElementById('projectsPage').style.display = 'none';
};

const onlyTechno = () => {
  document.getElementById('technologiesPage').scrollTo();
  document.getElementById('technologiesPage').style.display = 'block';
  document.getElementById('bioPage').style.display = 'none';
  document.getElementById('projectsPage').style.display = 'none';
};

const onlyProjects = () => {
  document.getElementById('projectsPage').scrollTo();
  document.getElementById('projectsPage').style.display = 'block';
  document.getElementById('technologiesPage').style.display = 'none';
  document.getElementById('bioPage').style.display = 'none';
};

const navEvents = () => {
  document.getElementById('home').addEventListener('click', homePage);
  document.getElementById('navToBio').addEventListener('click', onlyBio);
  document.getElementById('navToTechnologies').addEventListener('click', onlyTechno);
  document.getElementById('navToProjects').addEventListener('click', onlyProjects);
};

const init = () => {
  projectsData.getProjects()
    .then((resp) => {
      createProjectCards(resp);
      navEvents();
    })
    .catch(err => console.error('error from initTypes', err));
};

init();
