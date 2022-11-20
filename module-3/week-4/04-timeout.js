const https = require('https');
const api = 'https://jsonplaceholder.typicode.com/users?_limit=2';

https.get(api, res => {
    console.log(res.statusCode);
});

console.log('Conectando api...');