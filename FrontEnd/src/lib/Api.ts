const axios = require('axios');
const cors = require('cors');

const API = axios.create({
    baseURL: 'https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth'
});

API.use(cors());