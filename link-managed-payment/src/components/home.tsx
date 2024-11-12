import {
  AppContainer,
  containerStyles,
  InputCurrency,
  InputText,
  LabelText,
  PhoneInputText,
} from './styles';
import {
  LinkButton,
  useLinkPayContext,
} from '@link.money/linkpay-reactnative';
import {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {CreateSession} from './create-session';
import {AppProperties} from '../app-properties';

export default function Home({navigation}: {navigation: any}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sessionKey, setSessionKey] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const context = useLinkPayContext();

  useEffect(() => {
    if (context.sessionResult && context.sessionResult.paymentId) {
      Alert.alert(
        'Payment Request Complete',
        `Payment ID: ${context.sessionResult.paymentId}\nPayment Status: ${context.sessionResult.paymentStatus}\nCustomer ID: ${context.sessionResult.customerId}`
      );
      setSessionKey('');
      setBtnDisabled(true);
      context.setSessionResult(null);
    }
  }, [context.sessionResult]);

  const handleSessionCreation = (newSessionKey: string) => {
    setBtnDisabled(false);
    setSessionKey(newSessionKey);
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

        <LabelText> Phone Number</LabelText>
        <PhoneInputText
          value={phoneNumber}
          onChange={(number: string) => setPhoneNumber(number)}
          defaultCountry="US"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType={'phone-pad'}
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

        <CreateSession
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          amount={amount}
          onSuccess={handleSessionCreation}
        />

        <LabelText> Session Key</LabelText>
        <InputText
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          value={sessionKey}
          editable={false}
        />

        <View style={containerStyles.centerContainer}>
          <LinkButton
            navigation={navigation}
            environment={AppProperties.environment}
            sessionKey={sessionKey}
            disabled={btnDisabled}
          />
        </View>
      </ScrollView>
    </AppContainer>
  );
}
