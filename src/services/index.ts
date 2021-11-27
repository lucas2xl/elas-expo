import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://elas-node.herokuapp.com/v1',
});
