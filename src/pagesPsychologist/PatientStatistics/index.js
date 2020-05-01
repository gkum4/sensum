import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import backgroundImage from '../../assets/backgroundImage.png';

import { useNavigation } from '@react-navigation/native';

import felizIcon from '../../assets/expressions/felizIcon.png';
import neutroIcon from '../../assets/expressions/neutroIcon.png';
import tristeIcon from '../../assets/expressions/tristeIcon.png';
import whiteCircle from '../../assets/whiteCircle.png';

import { happyFeelings, neutralFeelings, sadFeelings } from '../../data';

import styles from './styles';

import { recommendationsFrequencyData } from '../../data';

const data = {
  happy: [...happyFeelings],
  neutral: [...neutralFeelings],
  sad: [...sadFeelings],
};

const newData = {};


data.happy.forEach((item, index) => {
  data.happy[index].intensity = Math.floor(Math.random() * 100);
  data.happy[index].timesRegistered = Math.floor(Math.random() * 20);
});
newData.happy = data.happy.filter((item) => {
  const sort = Math.floor(Math.random() * 4);
  if(sort === 1 ) {
    return item.intensity > 0;
  }
  return item.description === 'ja era';
});

data.neutral.forEach((item, index) => {
  data.neutral[index].intensity = Math.floor(Math.random() * 100);
  data.neutral[index].timesRegistered = Math.floor(Math.random() * 20);
});
newData.neutral = data.neutral.filter((item) => {
  const sort = Math.floor(Math.random() * 3);
  if(sort === 1) {
    return item.intensity > 0;
  }
  return item.description === 'ja era';
});

data.sad.forEach((item, index) => {
  data.sad[index].intensity = Math.floor(Math.random() * 100);
  data.sad[index].timesRegistered = Math.floor(Math.random() * 20);
});
newData.sad = data.sad.filter((item) => {
  const sort = Math.floor(Math.random() * 8);
  if(sort === 1) {
    return item.intensity > 0;
  }
  return item.description === 'ja era';
});

const PatientStatistics = () => {
  const navigation = useNavigation();

  const [expressionSectionPressed, setExpressionSectionPressed] = useState('happy');

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
              <Text style={styles.titleText}>Estatísticas</Text>
            </View>
          </View>

          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.expressionsButtonsContainer}>
              <TouchableOpacity
                style={[
                  styles.expressionButtonContainer,
                  expressionSectionPressed === 'happy'
                  ? { backgroundColor: 'rgba(0,0,0,0.1)' }
                  : { backgroundColor: 'rgba(255,255,255,0.1)' },
                ]}
                onPress={() => setExpressionSectionPressed('happy')}
              >
                <Image source={felizIcon} style={{width: 70, height: 70}}/>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.centerExpressionButtonContainer,
                  expressionSectionPressed === 'neutral'
                  ? { backgroundColor: 'rgba(0,0,0,0.1)' }
                  : { backgroundColor: 'rgba(255,255,255,0.1)' },
                ]}
                onPress={() => setExpressionSectionPressed('neutral')}
              >
                <Image source={neutroIcon} style={{width: 70, height: 70}}/>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.expressionButtonContainer,
                  expressionSectionPressed === 'sad'
                  ? { backgroundColor: 'rgba(0,0,0,0.1)' }
                  : { backgroundColor: 'rgba(255,255,255,0.1)' },
                ]}
                onPress={() => setExpressionSectionPressed('sad')}
              >
                <Image source={tristeIcon} style={{width: 70, height: 70}}/>
              </TouchableOpacity>
            </View>

            <View style={styles.barsContainer}>
              <View style={styles.itemContainer}>
                <View style={styles.itemEmotionContainer}>
                  <Image source={whiteCircle} style={{width: 40, height: 40}} />
                  <Text style={[styles.itemPercentageText, {fontSize: 7}]}>Intensidade</Text>
                </View>

                <View style={styles.itemVerticalBar} />

                <View style={styles.itemRightContainer}>

                  <Text style={styles.itemEmotionText}>Exemplo</Text>

                  <View style={styles.itemPercentageBarViewContainer}>
                    <View style={[styles.itemPercentageBarContainer, {width: '80%'}]}>
                      <Text style={styles.itemNumberOfTimesText}>Número de vezes que foi registrado</Text>
                    </View>
                  </View>

                </View>
              </View>

              {newData[expressionSectionPressed].map((item) => (
                <View style={styles.itemContainer}>
                  <View style={styles.itemEmotionContainer}>
                    <Image source={item.imgSrc} style={{width: 40, height: 40}} />
                    <Text style={styles.itemPercentageText}>{item.intensity}%</Text>
                  </View>

                  <View style={styles.itemVerticalBar} />

                  <View style={styles.itemRightContainer}>

                    <Text style={styles.itemEmotionText}>{item.type}</Text>

                    <View style={styles.itemPercentageBarViewContainer}>
                      <View style={[
                        styles.itemPercentageBarContainer,
                        {width: `${item.intensity}%`, backgroundColor: 'rgba(255,255,255,0.166)'}]}>
                        <Text style={styles.itemNumberOfTimesText}>{item.timesRegistered}</Text>
                      </View>
                    </View>

                  </View>
                </View>
              ))}
            </View>

            <View style={styles.recommendationsFrequencyTable}>
              <View style={styles.recommendationsFrequencyTableTitleContainer}>
                <Text style={styles.recommendationsFrequencyTableTitleText}>Recomendações diárias:</Text>
                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                  <Text style={styles.recommendationsFrequencyTableTitleText}>Nº</Text>
                </View>
              </View>
              {recommendationsFrequencyData.map((item) => (
                <View style={styles.recommendationsFrequencyTableItemContainer}>
                  <Icon name="circle" color="#fff" size={15} style={{marginRight: 15}}/>
                  <Text style={styles.recommendationsFrequencyTableItemText}>{item.title}</Text>
                  <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                    <Text style={[styles.recommendationsFrequencyTableItemText, {fontWeight: 'bold'}]}>{item.timesDone}X</Text>
                  </View>

                </View>
              ))}

            </View>

          </ScrollView>

        </View>
      </ImageBackground>
    </>
  );
};

export default PatientStatistics;
