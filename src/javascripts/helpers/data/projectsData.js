import axios from 'axios';


const getProjects = () => new Promise((resolve, reject) => {
  axios.get('https://personal-bio-site-a40da.firebaseio.com/projects/projects.json')
    .then((results) => {
      const projectResults = results.data;
      const projects = [];
      Object.keys(projectResults).forEach((projectId) => {
        projectResults[projectId].id = projectId;
        projects.push(projectResults[projectId]);
      });
      resolve(projects);
    })
    .catch(err => reject(err));
});

export default { getProjects };
