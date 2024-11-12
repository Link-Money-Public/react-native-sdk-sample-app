import {AppProperties} from '../app-properties';

export const getAccessToken = async () => {
  const body = new URLSearchParams({
    client_id: AppProperties.clientId,
    client_secret: AppProperties.clientSecret,
    scope: 'Link-Payment',
    grant_type: 'client_credentials',
  });
  const host: string = 'https://api.link-sandbox.money';
  const response = await fetch(`${host}/v1/tokens`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });
  const json = await response.json();
  return json.access_token;
};
