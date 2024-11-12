import {
  AppContainer,
  ButtonText,
  containerStyles,
  InputCurrency,
  InputText,
  LabelText,
  PressableButton,
} from './styles';
import {useLinkPayContext} from '@link.money/linkpay-reactnative';
import {useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {CreateSession} from './create-session';
import {PaymentResponse} from '../services/make-payment';
import {AppProperties} from '../app-properties';
import {MakePayment} from './make-payment';

export default function Home({navigation}: {navigation: any}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [sessionKey, setSessionKey] = useState('');
  const context = useLinkPayContext();

  const payByBank = () => {
    context.setSessionKey(sessionKey);
    context.setEnvironment(AppProperties.environment);
    navigation.navigate('LinkPayView');
  };

  const handlePayment = async (response: PaymentResponse) => {
    Alert.alert(
      'Payment Completed',
      `Payment ID: ${response.paymentId}\nPayment Status: ${response.paymentStatus}`
    );
  };

  return (
    <AppContainer style={containerStyles.container}>
      <ScrollView>
        <LabelText> First Name</LabelText>
        <InputText
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={setFirstName}
          value={firstName}
        />

        <LabelText> Last Name</LabelText>
        <InputText
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={setLastName}
          value={lastName}
        />

        <LabelText> Email</LabelText>
        <InputText
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />

        <CreateSession
          firstName={firstName}
          lastName={lastName}
          email={email}
          onSuccess={setSessionKey}
        />

        <LabelText> Session Key</LabelText>
        <InputText
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          editable={false}
          value={sessionKey}
        />

        <View style={containerStyles.centerContainer}>
          <PressableButton selected={false} onPress={payByBank}>
            <ButtonText>LINK ACCOUNT</ButtonText>
          </PressableButton>
        </View>

        <LabelText> Customer ID</LabelText>
        <InputText
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          editable={false}
          value={context.sessionResult?.customerId ?? ''}
        />

        <LabelText> Amount</LabelText>
        <InputCurrency
          value={amount}
          onChangeValue={setAmount}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />

        <MakePayment
          customerId={context.sessionResult?.customerId ?? ''}
          amount={amount}
          onSuccess={handlePayment}
        />
      </ScrollView>
    </AppContainer>
  );
}
