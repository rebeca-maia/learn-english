import { MODIFICA_NAME, MODIFICA_USERNAME, MODIFICA_PASSWORD } from './Types';

export const modificaName = text => ({
  type: MODIFICA_NAME,
  payload: text,
});

export const modificaUsename = text => ({
  type: MODIFICA_USERNAME,
  payload: text,
});

export const modificaPassword = text => ({
  type: MODIFICA_PASSWORD,
  payload: text,
});
