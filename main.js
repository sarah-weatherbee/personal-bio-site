//const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML += textToPrint;

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



const projects = [
    {
        title: "Cool Project",
        screenshot: "https://via.placeholder.com/250x250",
        description: "This is the cool project",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Medium cool Project",
        screenshot: "https://via.placeholder.com/250x250",
        description: "This was uncool",
        technologiesUsed: "HTML, CSS",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"

    },
    {
        title: "Slightly Cool Project",
        screenshot: "https://via.placeholder.com/250x250",
        description: "This was sort of cool",
        technologiesUsed: "HTML, CSS",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
];

const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
            
            
            domString += `<div class="projects">`;
            domString += `<div class="project-title"><strong>${projects[i].title}</strong></div>`;
            domString += `<div><img src=${projects[i].screenshot} alt="screenshot"></div>`;
            domString += `<div class="project-info-text">`;
            domString += `<div><strong>Description:</strong> ${projects[i].description}</div>`;
            domString += `<div>Technologies: ${projects[i].technologiesUsed}</div>`;
            domString += `<div>Available ${projects[i].available}</div>`;
            domString += `<div>url: <a href=${projects[i].url}>Here</a></div>`;
            domString += `<div>githubUrl: <a href=${projects[i].githubUrl}>Here</a></div>`;
            domString += `</div>`;
            domString += `</div>`;
            
            
        }
    }

    printToDom('projectsPage', domString)
};

 const homePage = () => {
    document.getElementById("bioPage").style.display = "block";
    document.getElementById("technologiesPage").style.display = "block";
    document.getElementById("projectsPage").style.display = "block";   

} 

const onlyBio = () => {
    document.getElementById("bioPage").scrollTo();
    document.getElementById("bioPage").style.display = "block";
    document.getElementById("technologiesPage").style.display = "none";
    document.getElementById("projectsPage").style.display = "none";
}

const onlyTechno = () => {
    document.getElementById("technologiesPage").scrollTo();
    document.getElementById("technologiesPage").style.display = "block";
    document.getElementById("bioPage").style.display = "none";
    document.getElementById("projectsPage").style.display = "none";

}

const onlyProjects = () => {
    document.getElementById("projectsPage").scrollTo();
    document.getElementById("projectsPage").style.display = "block";
    document.getElementById("technologiesPage").style.display = "none";
    document.getElementById("bioPage").style.display = "none";

}

const navEvents = () => {
    document.getElementById("home").addEventListener("click", homePage);
    document.getElementById("navToBio").addEventListener("click", onlyBio);
    document.getElementById("navToTechnologies").addEventListener("click", onlyTechno);
    document.getElementById("navToProjects").addEventListener("click", onlyProjects);
};

const init = () => {
    createProjectCards();
    navEvents();
};

init();