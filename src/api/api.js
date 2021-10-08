import axios from 'axios'

let apiRootUrl = "";
//const env = process.env.NODE_ENV;
const {REACT_APP_DEV_API, REACT_APP_PROD_API, NODE_ENV} = process.env;

switch(NODE_ENV){
    case 'development':
        apiRootUrl = REACT_APP_DEV_API;
        break;
    case 'production':
        apiRootUrl = REACT_APP_PROD_API;
        break;
    case 'test':
        apiRootUrl = REACT_APP_DEV_API;
        break;
    default:
        apiRootUrl = "";
}

export const api = axios.create({
    //other custom settings
    baseURL : apiRootUrl,
});

api.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
    return config
}, error => {
    return Promise.reject(error);
})


export default api

