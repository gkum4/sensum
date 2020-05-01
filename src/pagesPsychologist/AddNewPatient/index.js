import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, TextInput} from 'react-native';

import backgroundImage from '../../assets/backgroundImage.png';

import styles from './styles';

import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/FontAwesome'

import DismissKeyboard from '../../components/DismissKeyboard';

export default function HomeScreen(props) {

  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.imageBackground} >
      <DismissKeyboard>
        <View style={styles.container}>

          <View style={styles.topContainer}>
            <TouchableOpacity
              style={styles.arrowLeftContainer}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-left" size={40} color="#fff" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Adicionar novo paciente</Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.textInput}
                placeholder={'ID do paciente'}
                placeholderTextColor="#8F8F8F"
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
                <Text style={styles.textButton}>Feito</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </DismissKeyboard>
    </ImageBackground>
  );
}
