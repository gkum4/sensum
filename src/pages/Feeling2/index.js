import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'

import backgroundImage from '../../assets/backgroundImage.png'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

import { useNavigation } from '@react-navigation/native'

import Slider from '@react-native-community/slider';

import { Dialog } from 'react-native-simple-dialogs';

import { sadFeelings, happyFeelings, neutralFeelings } from '../../data';

const Timeline = ({ route }) => {
  const navigation = useNavigation();

  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogItem, setDialogItem] = useState({});

  const { expression, date, who } = route.params;

  const data = {
    happy: [...happyFeelings],
    neutral: [...neutralFeelings],
    sad: [...sadFeelings],
  };

  useEffect(() => {
    data.happy.forEach((item, index) => {
      data.happy[index].intensity = 0;
    });
    data.neutral.forEach((item, index) => {
      data.neutral[index].intensity = 0;
    });
    data.sad.forEach((item, index) => {
      data.sad[index].intensity = 0;
    });
  }, []);

  function handleQuestionMarkButtonPressed(item) {
    setDialogItem(item);
    setDialogVisible(true);
  }

  function DescriptionDialog({ item }) {
    return (
      <Dialog
        visible={dialogVisible}
        onTouchOutside={() => setDialogVisible(false)}
        dialogStyle={{borderRadius: 8, backgroundColor: '#00000080'}}
        overlayStyle={{backgroundColor: 'rgba(0,0,0,0.70)'}}
        animationType="fade"
      >
        <View style={styles.dialogContainer}>
          <Image source={item.imgSrc} style={{width: 70, height: 70}} />
          <Text style={styles.dialogTitleText}>{item.type}</Text>
          <Text style={styles.dialogDescriptionText}>{item.description}</Text>
          <TouchableOpacity
            onPress={() => setDialogVisible(false)}
            style={styles.dialogButtonContainer}
          >
            <Text style={styles.dialogButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    );
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>

        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.arrowLeftContainer}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={40} color="#fff" />
          </TouchableOpacity>

          <View style={{flex: 1, flexDirection: 'row-reverse', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.nextButtonContainer}
              onPress={() => navigation.navigate('NoteEdit', {
                who: who,
                date: date,
                title: '',
                description: '',
                feelingsData: data[expression],
              })}
            >
              <Text style={styles.nextButtonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{paddingBottom: 50}}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>O que você está sentindo?</Text>
          </View>
          {data[expression].map((item) => {
            const itemIndex = data[expression].findIndex((feeling) => feeling.type === item.type);
            const [sliderState, setSliderState] = useState(0);
            return (
              <View style={styles.itemContainer} key={item.type}>
                <Slider
                  style={{width: '100%', height: '100%', zIndex: 3, position: 'absolute'}}
                  minimumValue={0}
                  maximumValue={100}
                  value={sliderState}
                  onValueChange={(value) => {
                    data[expression][itemIndex].intensity = value;
                    setSliderState(value);
                  }}
                  minimumTrackTintColor="#00000000"
                  maximumTrackTintColor="#00000000"
                  thumbTintColor="#00000000"
                />

                <View style={styles.itemContentContainer}>
                  <Image source={item.imgSrc} style={{width: 40, height: 40}}/>
                  <Text style={styles.itemText}>
                    {item.type}
                  </Text>
                </View>

                <View style={styles.itemRightContainer}>
                  <TouchableOpacity
                    style={styles.itemQuestionMarkContainer}
                    onPress={() => handleQuestionMarkButtonPressed(item)}
                  >
                    <Icon name="question" size={20} color="#fff"/>
                  </TouchableOpacity>
                </View>

                <View
                  style={[styles.itemColorContainer, {width: `${sliderState}%`}]}
                />
              </View>
            );
          })}
        </ScrollView>


        <DescriptionDialog item={dialogItem}/>

      </View>
    </ImageBackground>
  )
}

export default Timeline
