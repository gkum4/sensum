import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';

export async function getMyNotes() {
  try {
    const value = await AsyncStorage.getItem('my_notes')
    if(value !== null) {
      const myNotes = JSON.parse(value);
      return myNotes;
    } else {
      return [];
    }
  } catch(e) {
    console.log('Error reading value');
  }
}

export async function saveNewNote(date, title, description, emotions) {
  const myNotes = await getMyNotes();

  const newNote = {
    id: uuid.v1(),
    date,
    title,
    description,
    emotions,
  };

  await AsyncStorage.setItem('my_notes', JSON.stringify([...myNotes, newNote]));

  return newNote;
}

/*

Formato dos Arrays

Array de Notas: [
  {
    id: uuid.v1(),
    date: '11 de Abril',
    title: 'Title',
    description: 'Description',
    emotions: [
      {
        emotion: 'Emotion',
        intensity: '%'
      }
    ],
  },
];

Array de Recomendações: [
  {
    title: 'Recomendação',
    id: uuid.v1(),
    done: true || false,
  },
]

*/
