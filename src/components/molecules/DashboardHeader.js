import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {BellIcon} from '../../../assets/icon';

const DashboardHeader = ({notificationPress}) =>{
  return(
    <View style={styles.container}>
      <View style={styles.leftHeader}>
        <Text style={styles.dayText}>Sen, 21 April 2020</Text>
        <Text style={styles.nameText}>Hai, Mohammad!</Text>
      </View>
      <View style={styles.rightHeader}>
        <TouchableOpacity
          onPress={notificationPress}
        >
          <BellIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row'
  },
  leftHeader:{
    flex: 5,
    paddingLeft: width*.05,
    paddingTop: width*.2
  },
  rightHeader: {
    flex: .9,
    paddingLeft: width*.05,
    paddingTop: width*.2
  },
  dayText:{
    color: 'white',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.04
  },
  nameText:{
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: width*.06
  },
})

export default DashboardHeader;