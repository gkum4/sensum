import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

import backgroundImage from '../../assets/backgroundImage.png';

import DismissKeyboard from '../../components/DismissKeyboard';

import styles from './styles';

import { useNavigation } from '@react-navigation/native'

export default function Lock({route}) {

  const [feito, setFeito] = useState(false);

  const { who } = route.params;

  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.imageBackground} >
      <DismissKeyboard>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitulo}>Digite sua senha</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='_'
              keyboardType='numeric'
              blurOnSubmit={false}
              maxLength={4}
              placeholderTextColor="#000000"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Timeline', { who: who, patientName: '' })} >
              <Text style={styles.buttonText}>Feito</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DismissKeyboard>
    </ImageBackground>
  );
}
