import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {HomeBackground} from '../../assets/images';
import {ProfilePicture} from '../components/atoms'

const Message = (props) =>{


  const [message, setMessage] = useState([
    {
      avatar: HomeBackground,
      date: '12 Apr',
      from: 'PT Harus Bisa',
      text: 'Lorem ipsum dolor sit amet...'
    },
    {
      avatar: HomeBackground,
      date: '12 Apr',
      from: 'PT Harus Bisa',
      text: 'Lorem ipsum dolor sit amet...'
    },
    {
      avatar: HomeBackground,
      date: '12 Apr',
      from: 'PT Harus Bisa',
      text: 'Lorem ipsum dolor sit amet...'
    },
    {
      avatar: HomeBackground,
      date: '12 Apr',
      from: 'PT Harus Bisa',
      text: 'Lorem ipsum dolor sit amet...'
    },
    {
      avatar: HomeBackground,
      date: '12 Apr',
      from: 'PT Harus Bisa',
      text: 'Lorem ipsum dolor sit amet...'
    },
    {
      avatar: HomeBackground,
      date: '12 Apr',
      from: 'PT Harus Bisa',
      text: 'Lorem ipsum dolor sit amet...'
    },
    {
      avatar: HomeBackground,
      date: '12 Apr',
      from: 'PT Harus Bisa',
      text: 'Lorem ipsum dolor sit amet...'
    },
  ])

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.messageTitle}>Utama</Text>
        <View style={styles.flatListContainer}>
            <FlatList 
              showsVerticalScrollIndicator={false}
              data={message}
              renderItem={({item}) => (
                <View style={{marginRight: width*.02, marginBottom: width*.02}}>
                  <TouchableOpacity activeOpacity={.8} style={styles.card}>
                    <ProfilePicture 
                      width={width*.18}
                      height={width*.18}
                      source={item.avatar}
                    />
                    <View style={styles.message}>
                      <Text style={styles.messageName}>{item.from}</Text>
                      <Text style={styles.messageText}>{item.text}</Text>
                      <Text></Text>
                    </View>
                    <View style={styles.date}>
                      <Text>{item.date}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              numColumns={1}
              keyExtractor={(item, index) => index}
            />
          </View>
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    paddingTop: width*.1,
    paddingHorizontal: width*.05
  },
  messageTitle:{
    color: '#9EA0A5',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.04
  },
  card:{
    width: width,
    height: width*.3,
    alignItems: 'center',
    paddingHorizontal: width*.02,
    display: 'flex',
    flexDirection: 'row'
  },
  flatListContainer:{
    alignItems: 'center',
    paddingBottom: width*.12
  },
  message:{
    flex: 2,
    paddingHorizontal: width*.02
  },
  date:{
    flex: .8,
    color: '#9EA0A5',
    fontFamily: 'OpenSans-Regular',
  },
  messageName:{
    color: '#1F2A36',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.04
  },
  messageText:{
    color: '#9EA0A5',
    fontFamily: 'OpenSans-Regular',
    fontSize: width*.03
  }
})

const mapStateToProps = state =>({
  auth: state.auth,
  profile: state.profile,
  skills: state.skills,
  portfolio: state.portfolio,
  workExperiences: state.workExperiences
})


export default connect(
  mapStateToProps,
)(Message);
