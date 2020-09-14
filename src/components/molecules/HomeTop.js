import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

import {
  PeworldLogo
} from '../../../assets/icon'

import {
  AppLogo
} from '../atoms'

const HomeTop = ({subTitle}) =>{
  const {width, height} = Dimensions.get('window')
  return(
    <>
      <View>
        <AppLogo 
          width={width*.08}
          source={PeworldLogo}
        />
        <Text style={styles.homeSubtitle}>
          {subTitle}
        </Text>
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  homeSubtitle:{
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    fontSize: width*.09,
    position: 'relative',
    marginBottom: 0,
    marginTop: '20%',
  },
})

export default HomeTop;
