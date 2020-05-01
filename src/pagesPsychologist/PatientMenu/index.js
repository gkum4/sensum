import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import graphicIcon from '../../assets/graphicIcon.png';

import backgroundImage from '../../assets/backgroundImage.png';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const PatientMenu = ({ route }) => {
  const navigation = useNavigation();

  const { patientName, who } = route.params;

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>

          <View style={styles.topContainer}>
            <TouchableOpacity
              style={styles.arrowLeftContainer}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-left" size={40} color="#fff"/>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{patientName}</Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('PatientStatistics')}
            >
              <Icon name="line-chart" size={70} color="#fff" />
              <Text style={styles.buttonText}>Estatísticas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('PatientRecommendations', {
                patientName: patientName,
              })}
            >
              <Icon name="list" size={70} color="#fff" />
              <Text style={styles.buttonText}>Recomendações</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Timeline', { who: who, patientName: patientName })}
            >
              <Icon name="calendar" size={70} color="#fff" />
              <Text style={styles.buttonText}>Timeline</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </>
  );
}

export default PatientMenu;
