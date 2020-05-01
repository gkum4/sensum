import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function NoteCard({
  title,
  note,
  emotions,
  id,
  onDelete,
  onPress,
}) {
  function truncateString(str, num) {
    if (str && str.length <= num) {
      return str
    }
    if (str) {
      return str.slice(0, num) + '...'
    }
  }

  return (
    <TouchableOpacity style={styles.listItemContainer} onPress={onPress}>
      <View style={styles.listItemTopContainer}>
        <View style={styles.listItemTopLeftContainer}>
          <Text style={styles.listeItemTopText}>{title}</Text>
        </View>
        <View style={styles.listItemTopRightContainer}>
          <Icon
            name="trash-o"
            color={'#fff'}
            size={20}
            style={{ paddingLeft: 10 }}
          />
          {emotions.map(emotion => (
            <Icon
              key={emotion}
              name="circle-o"
              size={20}
              style={{ paddingLeft: 5 }}
              color={emotion}
            />
          ))}
        </View>
      </View>
      <View style={styles.listItemBottomContainer}>
        <View style={styles.listItemBottomLeftContainer}>
          <Text style={styles.listItemNoteText}>{truncateString(note, 80)}</Text>
        </View>
        <View style={styles.listItemBottomRightContainer}>
          <Icon name="microphone" color={'#fff'} size={20} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    borderRadius: 5,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    color: '#BDBDBD',
  },
  description: {
    color: '#E2E2E2',
    marginTop: 4,
  },
  listItemContainer: {
    height: 120,
    backgroundColor: 'rgba(255,255,255,0.166)',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'column',
    marginBottom: 10,
  },
  listItemTopContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  listItemTopLeftContainer: {
    flex: 1,
  },
  listeItemTopText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  listItemTopRightContainer: {
    width: 40,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  listItemBottomContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  listItemBottomLeftContainer: {
    flex: 1,
  },
  listItemBottomRightContainer: {
    width: 30,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  listItemNoteText: {
    fontSize: 15,
    color: '#E2E2E2',
  },
})
