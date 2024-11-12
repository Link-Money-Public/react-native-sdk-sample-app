import {ButtonText, containerStyles, PressableButton} from './styles';
import {AppProperties} from '../app-properties';
import {View} from 'react-native';
import base64 from 'react-native-base64';
import {useState} from 'react';
import {v4} from 'react-native-uuid/dist/v4';

export const CreateSession = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  amount,
  onSuccess,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  amount: number;
  onSuccess: (sessionKey: string) => void;
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateText, setGenerateText] = useState('CREATE SESSION');

  const resetCreateSessionButton = () => {
    setIsGenerating(false);
    setGenerateText('CREATE SESSION');
  };

  const createSession = async () => {
    setIsGenerating(true);
    setGenerateText('GENERATING…');

    try {
      const authorization: string = `Basic ${base64.encode(
        AppProperties.clientId + ':' + AppProperties.clientSecret
      )}`;
      const host: string = 'https://api.link-sandbox.money';
      const body: string = JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        customerProfile: {
          guestCheckout: true,
        },
        paymentDetails: {
          amount: {
            value: amount,
            currency: 'USD',
          },
          requestKey: v4(),
        },
        experienceId: 'LINK_MANAGED_PAYMENT',
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
    } finally {
      resetCreateSessionButton();
    }
  };

  return (
    <View style={containerStyles.centerContainer}>
      <PressableButton
        selected={isGenerating}
        onPress={async () => onSuccess(await createSession())}>
        <ButtonText>{generateText}</ButtonText>
      </PressableButton>
    </View>
  );
};
