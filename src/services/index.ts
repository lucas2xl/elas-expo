import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://elas-node.herokuapp.com/v1',
  baseURL: 'http://192.168.0.32:4000/v1',
});
