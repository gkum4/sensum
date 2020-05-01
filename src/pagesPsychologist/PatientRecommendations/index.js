import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import backgroundImage from '../../assets/backgroundImage.png';

import { useNavigation } from '@react-navigation/native';

import ActionButton from 'react-native-action-button'

import styles from './styles';

const recommendationsData = [
  {
    title: 'Falar com seu irmão',
    id: '0',
  },
  {
    title: 'Exercitar-se',
    id: '1',
  },
  {
    title: 'Escrever emoções',
    id: '2',
  },
  {
    title: 'Meditar',
    id: '3',
  },
  {
    title: 'Conversar com família',
    id: '4',
  },
  {
    title: 'Passear com cachorro',
    id: '5',
  },
]

const PatientRecommendations = ({ route }) => {
  const navigation = useNavigation();

  const { patientName } = route.params;

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
              <Text style={styles.titleText}>Recomendações</Text>
            </View>
          </View>

          <View style={styles.boxContainer}>
            <FlatList
              data={recommendationsData}
              keyExtractor={item => item.id}
              style={{ flex: 1 }}
              ListHeaderComponent={() => (
                <View style={styles.activitiesTitleContainer}>
                  <Text style={styles.activitiesTitle}>Para {patientName}:</Text>
                </View>
              )}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Icon name="circle" size={15} color="#fff" />
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              )}
            />
          </View>

          <ActionButton
            buttonColor="#03A9F4"
            onPress={() => {
              navigation.navigate('PatientAddRecommendation');
            }}
          />

        </View>
      </ImageBackground>
    </>
  );
};

export default PatientRecommendations;
