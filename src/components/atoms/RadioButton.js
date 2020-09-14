import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  TextFieldMedium
} from '../atoms'

const RadioButton = ({title, submit, active, key}) =>{
  
  const [toggleActive, setToggleActive] = useState(active)
  const handleButtonToggle = () =>{
    setToggleActive(!toggleActive)
  }


  return(
    <>
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={handleButtonToggle} style={styles.radioButton(toggleActive)}>
          <View style={styles.radioButtonIndicator(toggleActive)}></View>
          <Text style={styles.radioButtonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  radioButtonContainer:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: width*.02
  },
  radioButton: (active)=>({
    paddingHorizontal: width*.03,
    paddingVertical: width*.02,
    width: width*.4,
    borderColor: '#46505C90',
    borderWidth: active? width*.001 : 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5
  }),
  radioButtonIndicator:(active)=>({
    width: width*.03,
    height: width*.03,
    backgroundColor: active? '#5E50A1': 'transparent',
    borderWidth: active? 0 : width*.001,
    borderColor: '#22222290',
    marginRight: width*.02,
    borderRadius: 100
  }),
  radioButtonText:{
    color: '#22222299',
    fontFamily: 'OpenSans-Regular',
    fontSize: width*.03
  }
})

export default RadioButton;