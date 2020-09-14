import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';


import{
  CloudIcon,
  UploadLeft,
  UploadRight
} from '../../../assets/icon'

import {
  TextFieldMedium,
  RadioButton
} from '../atoms'

const Portfolio = ({formGroup, submit}) =>{


  const [radioButton, setRadioButton] = useState([
    {
      name: 'Aplikasi mobile',
      active: false
    },
    {
      name: 'Aplikasi web',
      active: false
    },
  ])

  return(
    <>
      <View style={styles.container}>
        <View style={styles.formTitle}>
            <Text style={styles.formTitleText}>Portfolio</Text>
          </View>
          <View style={styles.formGroup}>
            {formGroup.map((form, index) => {
              return (
                <TextFieldMedium
                  key={index}
                  placeholder={form.placeholder}
                  value={form.value}
                  type={form.type}
                  secure={form.secure}
                  check={true}
                  submit={submit}
                  outline
                  height={form.height}
                />
              );
            })}
          </View>
          <View style={styles.radioButton}>
            <Text style={styles.radioButtonTitle}>Type portfolio</Text>
            <View style={styles.radioButtonContainer}>
              {radioButton.map((n, i)=>{
                return(
                  <RadioButton 
                    key={i}
                    title={n.name}
                    active={n.active}
                    submit={()=>setRadioButton(n.active)}
                  />
                )
              })}
            </View>
          </View>
          <View style={styles.uploadPicture}>
            <Text style={styles.uploadPictureTitle}>Upload gambar</Text>
            <View style={styles.uploadPictureContainer}>
              <View style={styles.cloud}>
                <CloudIcon />  
              </View>
              <Text style={styles.uploadText}>Upload File dari Penyimpanan</Text>
              <View style={styles.uploadDetails}>
                <UploadLeft />
                <UploadRight />
              </View>
            </View>
          </View>
          <View style={styles.breakLine}></View>
          <Button 
            big
            type='outline'
            color='#FBB017'
            textColor='#FBB017'
            title='Tambah pengalaman kerja'
          />
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    width: width*.95,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: width*.05,
    marginVertical: width*.02
  },
  formTitle:{
    borderBottomWidth: width*.002,
    borderBottomColor: '#E2E5ED',
    justifyContent: 'center',
    paddingVertical: width*.02,
    paddingHorizontal: width*.02
  },
  formTitleText:{ 
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.06
  },
  formGroup:{
    marginTop: width*.1,
    alignItems: 'center'
  },
  radioButton:{
    marginVertical: width*.05
  },
  radioButtonTitle:{
    textAlign: 'left',
    width: '90%',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.04,
    color: '#46505C90',
    alignSelf: 'center'
  },
  radioButtonContainer:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignSelf: 'center'
  },
  uploadPictureTitle:{
    textAlign: 'left',
    width: '90%',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.04,
    color: '#46505C90',
    alignSelf: 'center'
  },
  uploadPicture:{
    marginVertical: width*.05
  },
  uploadPictureContainer:{
    width: width*.85,
    height: width*.6,
    borderWidth: width*.002,
    borderColor: '#22222290',
    borderStyle: 'dashed',
    alignSelf: 'center',
    marginVertical: width*.02,
    borderRadius: 10
  },
  cloud:{
    alignSelf: 'center',
    marginVertical: width*.02
  },
  uploadText:{
    textAlign: 'center',
    color: '#1F2A36',
    fontFamily: 'OpenSans-SemiBold'
  },
  uploadDetails:{
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'space-around',
    marginVertical: width*.1
  },
  breakLine:{
    width: width*.85,
    height: width*.003,
    backgroundColor: '#E2E5ED',
    alignSelf: 'center',
    marginBottom: width*.05
  }
})

export default Portfolio;