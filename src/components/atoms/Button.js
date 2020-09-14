import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

/*
title? 'BUTTON_TITLE'
type? 'primary', 'outline'
big? boolean
withIconLeft? boolean
submit? submit(function())
*/

export default Button = ({title, type, big, withIconLeft, submit, description, color, textColor}) =>{

  withIconLeft=false

  const handlePressButton = () =>{
    if(submit!==undefined){
      submit()
    } else{
      console.log(`variable 'submit' expecting function`)
    }
  }

  return(
    <>
      {type==='primary'?
        <TouchableOpacity activeOpacity={.5} onPress={handlePressButton} style={styles.buttonPrimary(big, withIconLeft, color)}>
          {withIconLeft?
            <View style={{marginLeft: -width*.05, marginRight: -width*.05}}>
              <Icon 
                name='pen'
                size={12}
                color='white'
              />
            </View>:
            <></>
          }
          <Text style={styles.buttonPrimaryText(big, withIconLeft, textColor)}>{title}</Text>
        </TouchableOpacity>:
        type==='outline'?
        <TouchableOpacity activeOpacity={.5} onPress={handlePressButton} style={styles.buttonOutline(big, withIconLeft, color)}>
          <Text style={styles.buttonOutlineText(big, withIconLeft, textColor)}>{title}</Text>
        </TouchableOpacity>:
        type==='listed'?
        <TouchableOpacity activeOpacity={.5} onPress={submit} style={styles.listedButton}>
          <View style={styles.leftSectionButton}>
            <Text style={styles.listedButtonTitle}>{title, textColor}</Text>
            <Text style={styles.listedButtonDesc}>{description, textColor}</Text>
          </View>
          <View style={styles.rightSectionButton}>
            <Icon 
              name='chevron-right'
              size={15}
              color='#22222280'
            />
          </View>
        </TouchableOpacity>:
        <Text></Text>
      }
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonPrimary: (big, withIconLeft, colorProp) =>({
    height: big? width*.11 : width*.08,
    width: big? width*.9 : width*.4,
    backgroundColor: colorProp || '#DB3022',
    alignSelf: big? 'center' : 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: withIconLeft? 'row': 'column',
    borderRadius: 5,
    elevation: 3,
  }),
  buttonOutline: (big, withIconLeft, colorProp)=>({
    height: big? width*.11 : width*.09,
    width: big? width*.9 : width*.4,
    borderWidth: width*.005,
    borderColor: colorProp || 'white',
    alignSelf: big? 'center' : 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: withIconLeft? 'row': 'column',
    borderRadius: 5,
  }),
  buttonPrimaryText: (big, withIconLeft, textColorProp) =>({
    color: textColorProp || 'white',
    fontFamily: 'OpenSans-Bold',
    fontWeight: big? '600' : '700',
    fontSize: big? width*.04 : width*.03,
    marginRight: withIconLeft? width*.01:0,
  }),
  buttonOutlineText: (big, withIconLeft, textColorProp) =>({
    color: textColorProp || 'white',
    fontFamily: 'OpenSans-Bold',
    fontWeight: '600',
    fontSize: big? width*.04 : width*.03,
    marginRight: withIconLeft? width*.01:0
  }),
  listedButton:{
    width: width,
    height: width*.2,
    borderBottomWidth: width*.003,
    borderBottomColor: '#22222208',
    flexDirection: 'row',
    paddingLeft: width*.04,
    paddingRight: width*.04,
    alignItems: 'center'
  },
  leftSectionButton: {
    height: '60%',
    width: '95%',
    justifyContent: 'space-around',
  },
  listedButtonTitle:{
    fontWeight: '700',
    letterSpacing: width*.002
  },
  listedButtonDesc:{
    fontSize: width*.025,
    color: '#22222280'
  },
  rightSectionButton:{
    justifyContent: 'center',

  }
})
