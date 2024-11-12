import {AppProperties} from '../app-properties';
import base64 from 'react-native-base64';

export const createSession = async (
  firstName: string,
  lastName: string,
  email: string
) => {
  const authorization: string = `Basic ${base64.encode(
    AppProperties.clientId + ':' + AppProperties.clientSecret
  )}`;
  const host: string = 'https://api.link-sandbox.money';
  const body: string = JSON.stringify({
    firstName,
    lastName,
    email,
    experienceId: 'ONBOARD_WITH_DONE',
    customerProfile: {
      guestCheckout: true,
    },
  });
  const response = await fetch(`${host}/v2/sessions`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
    body,
  });
  const json = await response.json();
  return json.sessionKey;
};
