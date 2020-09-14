import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {
  HeaderBackButton
} from '../components/molecules'

const Notification = (props) =>{
  return(
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderBackButton 
            middleComponent={true}
            midCompTitle='Notifikasi'
            submit={()=>props.navigation.goBack()}
            backgroundColor='#F6F7F8'
          />
        </View>
        <View style={styles.body}>

        </View>
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    width: width,
    height: height,
    display: 'flex',
    backgroundColor: '#F6F7F8'
  },
  header:{
    flex: 1,
    justifyContent: 'center'
  },
  body:{
    flex: 6,
  }
})
export default Notification;
