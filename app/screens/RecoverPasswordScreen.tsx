import React, { useContext } from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import useTranslation from '../hooks/useTranslation';
import {Container} from '../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import { TranslationContext } from '../context/TranslationContext';

const RecoverPasswordScreen = () => {
  const {translation} = useContext(TranslationContext);
  return (
    <KeyboardAvoidingView>
      <Container>
        <Input
          placeholder={translation('email_adress')}
          leftIcon={<FontAwesome name="user" size={24} />}
        />
        <Button
          title={translation('continue')}
          raised
          titleStyle={style.btnTitleStyle}
          buttonStyle={style.btnStyle}
          containerStyle={style.btnContainerStyle}
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  socialIconStyle: {
    width: 60,
    height: 60,
    color: '#000',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderColor: '#fff',
  },
  btnTitleStyle: {
    fontSize: 20,
  },
  btnStyle: {
    padding: 10,
  },
  btnContainerStyle: {
    width: '100%',
  },
});

export default RecoverPasswordScreen;
