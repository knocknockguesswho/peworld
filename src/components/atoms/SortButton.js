import React, { useState } from 'react'
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const SortButton = ({onPress}) =>{
  return(
    <>
      <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
      >
        <IconFeather 
          name='list'
          size={20}
          color="#22222280"
        />
      </TouchableOpacity>
    </>
  )
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    width: width*.09,
    height: width*.09,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
})

export default SortButton;