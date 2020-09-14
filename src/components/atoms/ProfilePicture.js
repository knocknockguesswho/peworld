import React, { useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

const ProfilePicture = ({width, height, source, borderColor}) =>{
  return(
    <>
      <View style={styles.container(width, height, borderColor)}>
        <Image 
          source={source}
          style={{
            width: null,
            height: null,
            flex: 1,
            borderRadius: 100,
            resizeMode: 'cover'
          }}
        />
      </View>
    </>
  )
}



const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:(widthProp, heightProp, borderColorProp)=>({
    width: widthProp || width*.12,
    height: heightProp || width*.12,
    display: 'flex',
    borderRadius: 100,
    borderWidth: width*.005,
    borderColor: borderColorProp || 'transparent'
  })
})

export default ProfilePicture;
