import React, { useState } from 'react';

import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import {
  PeworldLogo
} from '../../../assets/icon';

const AppLogo = ({source, width, height, color}) =>{

  const Logo = source

  return(
    <>
      <View style={styles.logoWrapper(width)}>
        <Logo 
          width={width}
          height={width}
        />
        <Text style={styles.logoText(width, color)}>Peworld</Text>
      </View>
    </>
  )
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  logoWrapper:(widthProp)=>({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  logoText:(widthProp, colorProp)=>({
    fontFamily: 'OpenSans-SemiBold',
    color: colorProp || 'white',
    fontSize: widthProp*.5,
    marginLeft: widthProp*.2
  })
})

export default AppLogo;
