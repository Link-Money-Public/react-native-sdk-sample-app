import {ButtonText, containerStyles, PressableButton} from './styles';
import {View} from 'react-native';
import {useState} from 'react';
import {createSession} from '../services/create-session';

export const CreateSession = ({
  firstName,
  lastName,
  email,
  onSuccess,
}: {
  firstName: string;
  lastName: string;
  email: string;
  onSuccess: (sessionKey: string) => void;
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateText, setGenerateText] = useState('CREATE SESSION');
  const resetCreateSessionButton = () => {
    setIsGenerating(false);
    setGenerateText('CREATE SESSION');
  };

  const generateSession = async () => {
    setIsGenerating(true);
    setGenerateText('GENERATING…');
    try {
      return await createSession(firstName, lastName, email);
    } finally {
      resetCreateSessionButton();
    }
  };

  return (
    <View style={containerStyles.centerContainer}>
      <PressableButton
        selected={isGenerating}
        onPress={async () => onSuccess(await generateSession())}>
        <ButtonText>{generateText}</ButtonText>
      </PressableButton>
    </View>
  );
};
