import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native'

import backgroundImage from '../../assets/backgroundImage.png'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

import { useNavigation } from '@react-navigation/native'

import felizIcon from '../../assets/expressions/felizIcon.png';
import neutroIcon from '../../assets/expressions/neutroIcon.png';
import tristeIcon from '../../assets/expressions/tristeIcon.png';

const Feeling = ({ route }) => {
  const navigation = useNavigation()

  const { date, who } = route.params;

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>

          <View style={styles.topContainer}>
            <TouchableOpacity
              style={styles.arrowLeftContainer}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-left" size={40} color="#fff" />
            </TouchableOpacity>
            <View style={{flex: 1, flexDirection:'row-reverse', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.nextButtonContainer}
                onPress={() => navigation.navigate('NoteEdit', {
                  date: date,
                  title: '',
                  description: '',
                  feelingsData: [],
                })}
              >
                <Text style={styles.nextButtonText}>Pular</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Como você está?</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Feeling2', {
                who: who,
                date: date,
                expression: 'happy'
              })}
            >
              <Image source={felizIcon} style={styles.expressionIcon}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Feeling2', {
                date: date,
                expression: 'neutral'
              })}
            >
              <Image source={neutroIcon} style={styles.expressionIcon}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Feeling2', {
                date: date,
                expression: 'sad'
              })}
            >
              <Image source={tristeIcon} style={styles.expressionIcon}/>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </>
  )
}

export default Feeling;
