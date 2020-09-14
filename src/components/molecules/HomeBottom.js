import React, { useState } from 'react';
import{
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';

import {
  Button
} from '../atoms'

const HomeBottom = ({submit}) =>{
  
  return(
    <>
      <View style={styles.container}>
        <Button 
          big
          color='white'
          title='Masuk Sebagai Pekerja'
          type='primary'
          textColor='#5E50A1'
          submit={submit}
        />
        <View style={styles.break}>
          <View style={styles.breakLine}></View>
          <Text style={styles.breakText}>atau</Text>
          <View style={styles.breakLine}></View>
        </View>
        <Button 
          big
          textColor='white'
          title='Masuk Sebagai Perekrut'
          type='outline'
          color='white'
        />
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  break: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  breakLine:{
    width: '42%',
    height: width*.003,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  breakText: {
    fontFamily: 'OpenSans-SemiBold',
    color: 'white',
  },
  container:{
    height: '100%',
    justifyContent: 'space-around'
  }
})

export default HomeBottom;
