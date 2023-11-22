import axios from 'axios';

axios
 .get('https://api.github.com/users/razevedocosta')
 .then(response => axios.get(response.respos_url))
 .then(repos => console.log(repos.data))
 .catch(error => console.log(error))