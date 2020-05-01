import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import backgroundImage from '../../assets/backgroundImage.png'
import audioController from '../../components/audioController.png'
import styles from './styles'
import { Dialog } from 'react-native-simple-dialogs';

import { daysData } from '../../data';

const NoteEdit = ({ route }) => {
  const navigation = useNavigation()

  const { date, feelingsData, title, description, who } = route.params;

  var photosOfTheNote = [];

  if ( description !== '' ) {
    photosOfTheNote = daysData.notes.find((item) => item.note === description).photos;
  }


  const feelings = []

  feelingsData.length > 0 &&
    feelingsData.forEach(item => {
      item.intensity > 0 && feelings.push(item)
    })

  const [noteTitle, setNoteTitle] = useState(title)
  const [noteDescription, setNoteDescription] = useState(description)

  const [images, setImages] = useState([])
  const [recordingPath, setRecordingPath] = useState('')
  const [isPlayerVisible, setPlayerVisible] = useState(false)

  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogItem, setDialogItem] = useState({});


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

  function handleQuestionMarkButtonPressed(item) {
    setDialogItem(item);
    setDialogVisible(true);
  }

  const handleSelectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione uma opção:',
        takePhotoButtonTitle: 'Tirar foto',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
        cancelButtonTitle: 'Cancelar',
      },
      response => {
        if (response.error) {
          console.log('Error')
        } else if (response.didCancel) {
          console.log('User canceled')
        } else {
          const source = { uri: response.uri }
          console.log(source);
          const newImagesArr = [...images]
          newImagesArr.push(source)
          setImages(newImagesArr)
        }
      }
    )
  }

  

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
                    navigation.navigate('Day', {
                      date: date,
                    })
                  }}
                >
                  <Text style={styles.doneButtonText}>Feito</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <ScrollView>
                <View style={styles.noteContainer}>
                  <TextInput
                    style={styles.noteTitleTextInput}
                    placeholder="Dê um título a esse momento"
                    placeholderTextColor="#cecece"
                    maxLength={30}
                    autoCapitalize="sentences"
                    value={noteTitle}
                    onChangeText={text => setNoteTitle(text)}
                    editable={who === 'psychologist' ? false : true}
                  />
                  <TextInput
                    style={styles.noteBodyTextInput}
                    placeholder="Descrição"
                    placeholderTextColor="#cecece"
                    multiline={true}
                    textAlignVertical="top"
                    autoCapitalize="sentences"
                    value={noteDescription}
                    onChangeText={text => setNoteDescription(text)}
                    editable={who === 'psychologist' ? false : true}
                  />
                </View>

                {feelings.map(item => {
                  const [sliderState, setSliderState] = useState(item.intensity)
                  return (
                    <View style={styles.itemContainer} key={item.type}>
                      <Slider
                        style={{
                          width: '100%',
                          height: '100%',
                          zIndex: 3,
                          position: 'absolute',
                        }}
                        minimumValue={0}
                        maximumValue={100}
                        value={sliderState}
                        onValueChange={value => {
                          who !== 'psychologist' && setSliderState(value);
                        }}
                        minimumTrackTintColor="#00000000"
                        maximumTrackTintColor="#00000000"
                        thumbTintColor="#00000000"
                      />

                      <View style={styles.itemContentContainer}>
                        <Image
                          source={item.imgSrc}
                          style={{ width: 40, height: 40 }}
                        />
                        <Text style={styles.itemText}>{item.type}</Text>
                      </View>

                      <View style={styles.itemRightContainer}>
                        <TouchableOpacity
                          style={styles.itemQuestionMarkContainer}
                          onPress={() => handleQuestionMarkButtonPressed(item)}
                        >
                          <Icon name="question" size={20} color="#fff" />
                        </TouchableOpacity>
                      </View>

                      <View
                        style={[
                          styles.itemColorContainer,
                          { width: `${sliderState}%` },
                        ]}
                      />
                    </View>
                  )
                })}
                {who !== 'psychologist' && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 30,
                    }}
                  >
                    <TouchableOpacity
                      style={styles.addEmotionButton}
                      onPress={() =>
                        navigation.navigate('Feeling', {
                          date: date,
                        })
                      }
                    >
                      <Text style={styles.addEmotionButtonText}>
                        Adicionar emocao
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                
                {photosOfTheNote.map(item => (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(255,255,255,0.166)',
                      borderRadius: 8,
                      marginBottom: 15,
                      height: 300,
                      padding: 10,
                    }}
                  >
                    <Image
                      source={item.uri}
                      resizeMode="contain"
                      style={{ width: 280, height: 280 }}
                    />
                  </View>
                ))}
                {images.map(item => (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(255,255,255,0.166)',
                      borderRadius: 8,
                      marginBottom: 15,
                      height: 300,
                      padding: 10,
                    }}
                  >
                    <Image
                      source={{ uri: item.uri }}
                      resizeMode="contain"
                      style={{ width: 280, height: 280 }}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>

            {who !== 'psychologist' && (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.micIconContainer}>
                  <Icon name="microphone" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.camIconContainer}
                  onPress={handleSelectImage}
                >
                  <Icon name="camera" size={25} color="#fff" />
                </TouchableOpacity>
              </View>
            )}
          </View>

          <DescriptionDialog item={dialogItem} />
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  )
}

export default NoteEdit
