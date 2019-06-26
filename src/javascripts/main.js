import '../styles/main.scss';
import 'bootstrap';
import projectsData from './helpers/data/projectsData';


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (projects) => {
  let domString = '';
  for (let i = 0; i < projects.length; i += 1) {
    // domString += '<div class="projects">';
    domString += '<div class="col-12 col-md-6 col-lg-4">';
    domString += '<div class="card d col-flex h-100">';
    domString += `<div class="card-header"><strong>${projects[i].Name}</strong></div>`;
    domString += `<div class="card-img-top"><img src=${projects[i].imageUrl} alt="project picture"></div>`;
    domString += '<div class="card-body">';
    domString += `<div><strong>Description:</strong> ${projects[i].description}</div>`;
    domString += '<ul class="list-group list-group-flush">';
    domString += `<li class="list-group-item">${projects[i].Technologies}</li>`;
    domString += `<li class="list-group-item">Site: <a href=${projects[i].deployUrl}>Here</a></li>`;
    domString += `<li class="list-group-item">GitHub: <a href=${projects[i].githubUrl}>Here</a></li>`;
    domString += '</ul>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    // domString += '</div>';
  }

  printToDom('projectsPage', domString);
};

const homePage = () => {
  document.getElementById('bioPage').style.display = 'flex';
  document.getElementById('clipsPage').style.display = 'flex';
  document.getElementById('projectsPage').style.display = 'flex';
};

const onlyBio = () => {
  document.getElementById('bioPage').scrollIntoView();
  document.getElementById('bioPage').style.display = 'block';
  document.getElementById('clipsPage').style.display = 'none';
  document.getElementById('projectsPage').style.display = 'none';
};

const onlyClips = () => {
  document.getElementById('clipsPage').scrollIntoView();
  document.getElementById('clipsPage').style.display = 'block';
  document.getElementById('bioPage').style.display = 'none';
  document.getElementById('projectsPage').style.display = 'none';
};

const onlyProjects = () => {
  document.getElementById('projectsPage').scrollIntoView();
  document.getElementById('projectsPage').style.display = 'flex';
  document.getElementById('clipsPage').style.display = 'none';
  document.getElementById('bioPage').style.display = 'none';
};

const navEvents = () => {
  document.getElementById('name').addEventListener('click', homePage);
  document.getElementById('navToBio').addEventListener('click', onlyBio);
  document.getElementById('navToClips').addEventListener('click', onlyClips);
  document.getElementById('navToProjects').addEventListener('click', onlyProjects);
};

const init = () => {
  navEvents();
  projectsData.getProjects()
    .then((resp) => {
      createProjectCards(resp);
    })
    .catch(err => console.error('error from initTypes', err));
};

init();
