import React, {useContext} from 'react';
import useTranslation from '../hooks/useTranslation';
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import {Input} from 'react-native-elements';
import {Button, Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Container, UpperView, BottomView} from '../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {TranslationContext} from '../context/TranslationContext';

type LoginScreenNavigationProp = StackNavigationProp<any, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({navigation}: Props) => {
  const {translation} = useContext(TranslationContext);

  return (
    <KeyboardAvoidingView behavior="height" enabled>
      <Container>
        <UpperView>
          <Input
            placeholder={translation('email_adress')}
            leftIcon={<FontAwesome name="user" size={24} />}
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
        </UpperView>
        <BottomView>
          <Button
            type="clear"
            title={translation('forgot_password')}
            onPress={() => navigation.navigate('RecoverPassword')}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Icon name="facebook" type="font-awesome" raised />
            <Icon name="twitter" type="font-awesome" raised />
            <Icon name="google-plus" type="font-awesome" raised />
          </View>
          <Button
            type="clear"
            title={translation('register_account')}
            onPress={() => navigation.navigate('RegisterAccount')}
          />
        </BottomView>
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

export default LoginScreen;
