import React, { useContext } from 'react';
import useTranslation from '../hooks/useTranslation';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Container} from '../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import { TranslationContext } from '../context/TranslationContext';

type RegisterAccountScreenNavigationProp = StackNavigationProp<any, 'Login'>;

type Props = {
  navigation: RegisterAccountScreenNavigationProp;
};

const RegisterAccountScreen = ({navigation}: Props) => {
  const {translation} = useContext(TranslationContext);

  return (
    <KeyboardAvoidingView behavior="height" enabled>
      <Container>
        <Input
          placeholder={translation('name')}
          leftIcon={<FontAwesome name="user" size={24} />}
        />
        <Input
          placeholder={translation('email_adress')}
          leftIcon={<FontAwesome name="envelope" size={24} />}
        />
        <Input
          placeholder={translation('password')}
          leftIcon={<FontAwesome name="lock" size={24} />}
        />
        <Button
          title={translation('continue')}
          raised
          titleStyle={style.btnTitleStyle}
          buttonStyle={style.btnStyle}
          containerStyle={style.btnContainerStyle}
        />
        <Button
          type="clear"
          title={translation('already_has_account')}
          onPress={() => navigation.goBack()}
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

export default RegisterAccountScreen;
