import React from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
const availableLanguage = ['es', 'en'];

i18n.translations.es = {
  email_adress: 'Correo electrónico',
  password: 'Contraseña',
  forgot_password: '¿Olvidaste tu contraseña?',
  register_account: 'Registra tu cuenta',
  continue: 'Continuar',
  name: 'Nombre',
  already_has_account: '¿Ya tienes una cuenta?',
};

i18n.translations.en = {
  email_adress: 'E-mail address',
  password: 'Password',
  forgot_password: 'Forgot password?',
  register_account: 'Register account',
  continue: 'Continue',
  name: 'Name',
  already_has_account: 'Already has account?',
};

const rnLanguage = RNLocalize.findBestAvailableLanguage(availableLanguage);
i18n.locale = rnLanguage?.languageTag || 'en';

export const TranslationContext = React.createContext({
  translation: (key: string) => i18n.t(key),
});
