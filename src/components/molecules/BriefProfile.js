import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  HomeBackground
} from '../../../assets/images'

import {
  ProfilePicture,
  Button
} from '../atoms'

const BriefProfile = () =>{


  const [data, setData] = useState({
    name: 'Louis Tomlinson',
    job: 'Web Developer',
    location: 'Purwokerto, Jawa Tengah',
    jobDetails: 'Freelancer'
  })

  return(
    <>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <ProfilePicture 
            height={width*.4}
            width={width*.4}
            source={HomeBackground}
          />
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Icon 
            size={25}
            color='#9B9B9B'
            name='pencil'
          />
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <View style={styles.profileDetails}>
          <Text style={styles.dataName}>{data.name}</Text>
          <Text style={styles.dataJob}>{data.job}</Text>
          <View style={styles.location}>
            <Icon 
              size={20}
              name='map-marker-outline'
              color='#9EA0A5'
            />
            <Text style={styles.locationText}>{data.location}</Text>
          </View>
          <Text style={styles.jobDetails}>{data.jobDetails}</Text>
        </View>
      </View>
      <View style={styles.saveButton}>
        <Button 
          big
          type='primary'
          color='#5E50A1'
          title='Simpan'
          submit={()=>console.log('simpan')}
        />
        <Button 
          big
          type='outline'
          color='#5E50A1'
          title='Batal'
          textColor='#5E50A1'
          submit={()=>console.log('batal')}
        />
      </View>
    </>
  )
}
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    height: width*1,
    width: width*.95,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: width*.05,
  },
  avatar:{
    alignItems: 'center'
  },
  editButton:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: width*.02
  },
  editButtonText:{
    color: '#9B9B9B',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.04
  },
  profileDetails:{
    marginTop: width*.05,
    height: width*.4,
    paddingHorizontal: width*.05,
    justifyContent: 'space-evenly'
  },
  dataName:{
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.05
  },
  dataJob:{
    fontFamily: 'OpenSans-Regular',
    fontSize: width*.03
  },
  location:{
    display: 'flex',
    flexDirection: 'row'
  },
  locationText:{
    fontFamily: 'OpenSans-Regular',
    color:'#9EA0A5',
    fontSize: width*.03
  },
  jobDetails:{
    color: '#9EA0A5',
    fontSize: width*.03
  },
  saveButton:{
    marginVertical: width*.05,
    height: width*.3,
    justifyContent: 'space-around'
  }
})

export default BriefProfile;