import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  TextFieldMedium,
} from '../atoms'

const DataDiri = ({formGroup, link, submit, onPress}) =>{

  
  return(
    <>
      <View style={styles.container}>
        <View style={styles.formTitle}>
          <Text style={styles.formTitleText}>Data diri</Text>
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
  }
})

export default DataDiri;