import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
const Audio = (props) => {
  return (
<View style={styles.audioContent}>{props.text}</View>
  )
}

export default Audio;

const styles = StyleSheet.create({
    audioContent:{
        padding:10,
        margin:20,
        justifyContent:'space-around',
        


    }
  });