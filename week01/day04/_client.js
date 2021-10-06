const axios = require('axios');



async function requestLocal() {
    console.log('async version: enter');
    const response = await axios.get('http://localhost:3000');
    console.log(response.data);
    console.log('async version: exit');
}

function requestLocal_() {
    console.log('sync version: enter');
    const res = axios.get('http://localhost:3000');
    console.log(res);
    console.log('sync version: exit');
}

requestLocal();

requestLocal_();