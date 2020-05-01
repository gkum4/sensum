import React from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, ImageBackground, SafeAreaView, Button} from 'react-native';

import ActionButton from 'react-native-action-button'

import backgroundImage from '../../assets/backgroundImage.png';

import { useNavigation } from '@react-navigation/native'

import styles from './styles';

const Imagem = {
  face1: require('../../assets/patients/face1.jpg'),
  face2: require('../../assets/patients/face2.jpg'),
  face3: require('../../assets/patients/face3.jpg'),
  face4: require('../../assets/patients/face4.jpg'),
  face5: require('../../assets/patients/face5.jpg'),
  face6: require('../../assets/patients/face6.jpg'),
  face7: require('../../assets/patients/face7.jpg'),
  face8: require('../../assets/patients/face8.jpg'),
  face9: require('../../assets/patients/face9.jpg'),
  face10: require('../../assets/patients/face10.jpg'),
};



const DATA = [

  {
    id: 'Ana',
    title: 'Ana',
    pontos: 12,
    img:'face1',
  },
  {
    id: 'Maria',
    title: 'Maria',
    pontos: 12,
    img:'face2',

  },
  {
    id: 'Vanessa',
    title: 'Vanessa',
    pontos: 12,
    img:'face3',

  },
  {
    id: 'Jorge',
    title: 'Jorge',
    pontos: 12,
    img:'face4',

  },
  {
    id: 'Lucas',
    title: 'Lucas',
    pontos: 12,
    img:'face5',
  },
  {
    id: 'Carlos',
    title: 'Carlos',
    pontos: 12,
    img:'face6',

  },
  {
    id: 'Emília',
    title: 'Emília',
    pontos: 17,
    img:'face7',

  },
  {
    id: 'Juliana',
    title: 'Juliana',
    pontos: 2,
    img:'face8',

  },
  {
    id: 'Roberta',
    title: 'Roberta',
    pontos: 22,
    img:'face9',

  },
  {
    id: 'Paula',
    title: 'Paula',
    pontos: 81,
    img:'face10',

  },

];

function Item({ title , pontos, img, onPress}) {
  return (
    <TouchableOpacity style={styles.containerPacientes} onPress={onPress}>
      <Image style={styles.imagemPerfil} source={Imagem[img]} />
      <Text style={styles.itemNameText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function myPatients({ route }) {
  const navigation = useNavigation();

  const { who } = route.params;

  return (
    <ImageBackground source={backgroundImage} style={styles.imageBackground} >
      <View style={styles.container}>
        <View style={{marginBottom: 30}}>
          <Text style={styles.titleText}>Meus Pacientes</Text>
        </View>
        <FlatList
          data={DATA}
          ListFooterComponent={() => (
            <View style={{width: '100%', height: 80}} />
          )}
          renderItem={({ item }) => (
            <Item
              pontos={item.pontos}
              title={item.title}
              img={item.img}
              onPress={() => navigation.navigate('PatientMenu', {
                who: who,
                patientName: item.title,
              })}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <ActionButton
            buttonColor="#03A9F4"
            onPress={() => {
              navigation.navigate('AddNewPatient');
            }}
          />
      </View>


    </ImageBackground>
  );
}
