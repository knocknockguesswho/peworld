import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  BriefProfile,
  DataDiri,
  Skill,
  WorkExperiences,
  Portfolio
} from '../components/molecules'

const Profile = () =>{
  return(
    <>
      <View style={styles.container}>
        <View style={styles.briefProfile}>
          <BriefProfile />
        </View>
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    paddingTop: width*.1
  }
})

export default Profile;