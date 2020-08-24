import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {TranslationContext} from '../context/TranslationContext';

const SettingsScreen = () => {
  const {translation} = useContext(TranslationContext);
  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {translation('configuration').toUpperCase()}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text>{translation('activate_alerts')}</Text>
        <Switch />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text>{translation('mexico_city')}</Text>
        <Switch />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text>{translation('santiago')}</Text>
        <Switch />
      </View>
    </View>
  );
};

export default SettingsScreen;
