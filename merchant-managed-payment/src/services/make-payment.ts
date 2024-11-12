import {AppProperties} from '../app-properties';
import {v4} from 'react-native-uuid/dist/v4';

export interface PaymentResponse {
  paymentId?: string;
  paymentStatus?: string;
}

export const makePayment = async (
  customerId: string,
  amount: number,
  accessToken: string,
): Promise<PaymentResponse> => {
  const host: string = 'https://api.link-sandbox.money';
  const response = await fetch(`${host}/v1/payments`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      amount: {
        value: amount,
        currency: 'USD',
      },
      requestKey: v4(),
      currency: 'USD',
      source: {
        id: customerId,
        type: 'CUSTOMER',
      },
      destination: {
        id: AppProperties.merchantId,
        type: 'MERCHANT',
      },
    }),
  });
  const json = await response.json();
  return {
    paymentId: json?.paymentId,
    paymentStatus: json?.paymentStatus,
  };
};
