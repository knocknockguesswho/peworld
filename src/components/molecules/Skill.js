import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity, 
  TextInput
} from 'react-native';

import {
  Tags
} from '../atoms'

const Skill = () =>{
  return(
    <>
      <View style={styles.container}>
        <View style={styles.formTitle}>
          <Text style={styles.formTitleText}>Skill</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formContainer}>
            <TextInput 
              placeholder='Masukkan Skill'
            />  
          </View>
          <TouchableOpacity style={styles.formButton}>
            <Text style={styles.formButtonText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    height: width*.5,
    width: width*.95,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: width*.05,
    marginVertical: width*.02
  },
  formTitle:{
    borderBottomWidth: width*.002,
    borderBottomColor: '#E2E5ED',
    justifyContent: 'center',
    paddingVertical: width*.02,
    paddingHorizontal: width*.02
  },
  formTitleText:{ 
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.06
  },
  formGroup:{
    marginTop: width*.1,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: width*.02,
    justifyContent: 'space-evenly'
  },
  formContainer:{
    width: width*.7,
    height: width*.1,
    borderWidth: width*.002,
    borderColor: '#22222250',
    borderRadius: 10
  },
  formButton:{
    width: width*.15,
    height: width*.1,
    backgroundColor: '#FBB017',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'

  },
  formButtonText:{
    color: 'white',
    fontFamily: 'OpenSans-SemiBold'
  }
})

export default Skill;