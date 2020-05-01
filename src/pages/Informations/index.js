import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import imageBackground from '../../assets/backgroundImage.png';
import logo from '../../assets/logo.png';
import styles from './styles';

const Informations = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <ImageBackground source={imageBackground} style={styles.imageBackground} >

      <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: 80, marginTop: 15}}>
        <Image source={logo} style={{width: 70, height: 70, marginBottom: 30}} />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Lock', { who: 'patient' })}>
        <Icon name="user" color="#fff" size={100} />
        <Text style={styles.buttonText}>Sou usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('MyPatients', { who: 'psychologist' })}>
        <Icon name="user-o" color="#fff" size={100} />
        <Text style={styles.buttonText}>Sou psicólogo</Text>
      </TouchableOpacity>

      {/* <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>

          <Image source={logo} style={{ width: 80, height: 80, marginBottom: 20 }} />

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Primeiro, precisamos de algumas informações
            </Text>
          </View>

          <View style={styles.inputsContainer}>
            <TextInput
              placeholder ={'Digite seu nome'}
              autoCapitalize='words'
              style={styles.input}
              placeholderTextColor="#cecece"
            />
            <TextInput
              placeholder ={'Digite sua idade'}
              keyboardType='numeric'
              style={styles.input}
              placeholderTextColor="#cecece"
            />
            <TextInput
              placeholder ={' Crie sua senha'}
              secureTextEntry={true}
              style={styles.input}
              placeholderTextColor="#cecece"
              keyboardType="number-pad"
              maxLength={4}
            />
          </View>

          <TouchableOpacity
            style={styles.containerCheckBox}
            onPress={() => checked ? setChecked(false) : setChecked(true)}
          >
            <View style={styles.checkBoxIconContainer}>
              <CheckBox
                checkedIcon={<Icon name="check-circle" size={20} color="#fff" />}
                uncheckedIcon={<Icon name="circle-o" size={20} color="#fff" />}
                checked={checked}
              />
            </View>
            <View style={styles.checkBoxTextContainer}>
              <Text style={styles.checkBoxText}>
                Marque essa opcão caso seja psicólogo e deseje utilizar o aplicativo para fins de tratamento aos seus pacientes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => checked ? navigation.navigate('MyPatients', { who: 'psychologist' }) : navigation.navigate('Lock', { who: 'patient' })}
            style={styles.containerButton}
          >
            <Text style={styles.containerText3}>Feito</Text>
          </TouchableOpacity>

        </View>
      </ScrollView> */}

  </ImageBackground>
  );
}

export default Informations;
