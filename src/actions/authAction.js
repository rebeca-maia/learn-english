import jwt from 'jwt-decode';
import api from '../service/api';
import { SUCESS } from './Types';

export const sucess = (dispacth) => {
  dispacth({ type: SUCESS });
};

export const error = text => ({ type: 'ERRO', text });

export const authenticati = ({ username, password }, history) => async (dispacth) => {
  try {
    const response = await api.post('/login', {
      username,
      password,
    });
    const { token } = response.data;
    const decode = jwt(token);
    localStorage.setItem('@CodeApi:token', token);
    localStorage.setItem('@CodeApi:username', decode.sub);
    await sucess(dispacth);
    history.push('/');
  } catch (err) {
    error(err);
  }
};
