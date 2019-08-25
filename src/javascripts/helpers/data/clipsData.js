import axios from 'axios';


const getClips = () => new Promise((resolve, reject) => {
  axios.get('https://personal-bio-site-a40da.firebaseio.com/clips/clips.json')
    .then((results) => {
      const clipResults = results.data;
      const clips = [];
      Object.keys(clipResults).forEach((clipId) => {
        clipResults[clipId].id = clipId;
        clips.push(clipResults[clipId]);
      });
      resolve(clips);
    })
    .catch(err => reject(err));
});

export default { getClips };
