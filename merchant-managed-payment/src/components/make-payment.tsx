import {useState} from 'react';
import {View} from 'react-native';
import {ButtonText, containerStyles, PressableButton} from './styles';
import {getAccessToken} from '../services/get-access-token';
import {makePayment, PaymentResponse} from '../services/make-payment';

export const MakePayment = ({
  customerId,
  amount,
  onSuccess,
}: {
  customerId: string;
  amount: number;
  onSuccess: (paymentResponse: PaymentResponse) => void;
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateText, setGenerateText] = useState('MAKE PAYMENT');
  const resetMakePaymentButton = () => {
    setIsGenerating(false);
    setGenerateText('MAKE PAYMENT');
  };

  const requestPayment = async () => {
    setIsGenerating(true);
    setGenerateText('MAKING…');
    try {
      const accessToken = await getAccessToken();
      return await makePayment(customerId, amount, accessToken);
    } finally {
      resetMakePaymentButton();
    }
  };

  return (
    <View style={containerStyles.centerContainer}>
      <PressableButton
        selected={isGenerating}
        onPress={async () => onSuccess(await requestPayment())}>
        <ButtonText>{generateText}</ButtonText>
      </PressableButton>
    </View>
  );
};
