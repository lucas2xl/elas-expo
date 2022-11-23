import { connect } from 'socket.io-client';
import axios from 'axios';

const BASE_URL = 'http://192.168.1.19:4000';
export const api = axios.create({
  baseURL: `${BASE_URL}/v1`,
});

export const socket = connect(BASE_URL);
