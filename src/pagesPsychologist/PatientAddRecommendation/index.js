import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import backgroundImage from '../../assets/backgroundImage.png'
import audioController from '../../components/audioController.png'
import styles from './styles'

import { daysData } from '../../data';

const PatientAddRecommendation = () => {
  const navigation = useNavigation();

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <TouchableOpacity
                style={styles.arrowLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-left" size={40} color="#fff" />
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                <TouchableOpacity
                  style={styles.doneButtonContainer}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Text style={styles.doneButtonText}>Feito</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.noteBodyContainer}>
              <TextInput
                style={styles.noteBodyTextInput}
                placeholder="Nova recomendação"
                placeholderTextColor="#cecece"
                multiline={true}
                autoFocus={true}
                textAlignVertical="top"
                autoCapitalize="sentences"
              />
            </View>

          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  )
}

export default PatientAddRecommendation;
