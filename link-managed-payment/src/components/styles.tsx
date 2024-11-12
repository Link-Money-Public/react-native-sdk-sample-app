import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import styled from 'styled-components/native';
import PhoneInput from 'react-phone-number-input/react-native-input';

export const PressableButton = styled(Pressable)<{selected: boolean}>`
  align-items: center;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  elevation: 3;
  background-color: #35494a;
`;

export const AppContainer = styled(SafeAreaView)`
  flex: 1;
  padding-top: 23px;
  background-color: #ffffff;
  margin: 0;
`;

export const ButtonText = styled(Text)`
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: white;
`;

export const LabelText = styled(Text)`
  margin: 8px;
  font-weight: bold;
  color: black;
`;

export const InputText = styled(TextInput)`
  margin: 8px;
  height: 40px;
  border-color: #eeeeee;
  color: black;
  border-width: 0.5px;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #eeeeee;
`;

export const PhoneInputText = styled(PhoneInput)`
  margin: 8px;
  height: 40px;
  border-color: #eeeeee;
  color: black;
  border-width: 0.5px;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #eeeeee;
`;

export const InputCurrency = styled(CurrencyInput)`
  margin: 8px;
  height: 40px;
  border-color: #eeeeee;
  color: black;
  border-width: 0.5px;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #eeeeee;
`;

export const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
  },
  centerContainer: {
    alignItems: 'center',
  },
  containerBottom: {
    paddingTop: 23,
    paddingBottom: 6,
  },
});
