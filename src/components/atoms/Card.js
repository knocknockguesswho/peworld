import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';

const Card = ({width, height, backgroundColor, elevation, onPress}) =>{
  
  return(
    <>
      <TouchableOpacity 
        style={
          styles.container(width, height, backgroundColor, elevation)
        }
        activeOpacity={.5}
        
      >
        <></>
      </TouchableOpacity>
    </>
  )
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: (widthProp, heightProp, backgroundColorProp, elevationProp) =>({
    width: widthProp || width*.9,
    height: heightProp || width*.4,
    backgroundColor: backgroundColorProp || 'white',
    elevation: elevationProp || 0
  })
})

export default Card;