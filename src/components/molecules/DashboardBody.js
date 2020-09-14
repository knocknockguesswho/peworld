import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {ProfilePicture} from '../atoms'

const DashboardBody = ({data}) =>{


  return(
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewLayout}>
          <View style={styles.jobTitle}>
            <Text style={styles.jobText}>{data[0].job}</Text>
          </View>
          {data.map((n, i)=>{
            return(
              <TouchableOpacity key={i} style={styles.data}>
                <View style={styles.card}>
                  <View style={styles.avatar}>
                    <ProfilePicture 
                      source={n.avatar}
                      width={width*.15}
                      height={width*.15}
                    />
                  </View>
                  <View style={styles.profile}>
                    <Text style={styles.name}>{n.name}</Text>
                    <Text style={styles.job}>{n.job}</Text>
                    <View style={styles.skills}>
                      <TouchableOpacity style={styles.skillsButton}>
                        <Text style={styles.skillsText}>{n.skills[0]}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.skillsButton}>
                        <Text style={styles.skillsText}>{n.skills[1]}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.skillsButton}>
                        <Text style={styles.skillsText}>{n.skills[2]}</Text>
                      </TouchableOpacity>
                      <Text style={styles.skillRemains}>+8</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </>
  )
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  data:{
    marginBottom: width*.015,
    alignSelf: 'center',
  },
  jobTitle:{
    width: width*.95,
    height: width*.2,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  jobText:{
    fontFamily: 'OpenSans-Bold',
    color: '#1F2A36',
    fontSize: width*.05
  },
  scrollViewLayout:{
    paddingBottom: width*.5,
    paddingTop: width*.02
  },
  card:{
    width: width*.95,
    height: width*.25,
    backgroundColor: 'white',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  avatar:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profile:{
    flex: 5,
    justifyContent: 'center'
  },
  name:{
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.04,
    color: '#1F2A36',
  },
  job:{
    color: '#9EA0A5'
  },
  skills:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  skillsButton:{
    backgroundColor: '#FBB017',
    paddingVertical: width*.01,
    paddingHorizontal: width*.03,
    alignSelf: 'flex-start',
    marginRight: width*.01,
    borderRadius: 10
  },
  skillsText:{
    color: 'white'
  },
  skillRemains:{
    color: '#9EA0A5'
  }
});

export default DashboardBody;
