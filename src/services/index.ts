import { connect } from 'socket.io-client';
import axios from 'axios';

const BASE_URL = 'https://elas-node.herokuapp.com';
export const api = axios.create({
  baseURL: `${BASE_URL}/v1`,
});

export const socket = connect(BASE_URL);
