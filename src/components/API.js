import Axios from 'axios';

// FIXME: Figure out a way to make calls to different servers based on the .env
export default Axios.create({
  // baseURL: `https://aurelia-server.herokuapp.com/api/`,
  baseURL: `http://localhost:3500/api/`,
  headers: {
    Authorization: 'bearer ',
    'Access-Control-Allow-Origin': '*',
  },
});
