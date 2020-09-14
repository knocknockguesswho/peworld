import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  PeworldLogoColored
} from '../../../assets/icon'
import {AppLogo, TextFieldMedium, Button} from '../atoms';
// const {width,height} = Dimensions.get('window')

const FormAuth = ({title, formGroup, link, submit, onPress, type, subTitle, forgotPress, buttonTitle}) => {
  const [input, setInput] = useState({
    
  });


  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.logo}>
          <AppLogo 
            width={width*.08}
            source={PeworldLogoColored}
            color='#5E50A1'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.formTitle}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
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
              />
            );
          })}
        </View>
        {type=='login'?
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            activeOpacity={.5}
            onPress={forgotPress}
          ><Text>Lupa kata sandi?</Text>
          </TouchableOpacity>
        </View>:
        <View></View>
        }
        <View style={styles.buttonContainer}>
          <Button 
            type='primary'
            color='#FBB017'
            title={buttonTitle}
            submit={onPress}
            big
          />
        </View>
      </View>
    </>
  );
};

export default FormAuth;
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    paddingHorizontal: width*.04,
    paddingVertical: width*.08
  },
  formTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: width*.1,
    color: '#46505C',
  },
  subTitle: {
    fontSize: width*.04,
    color: '#46505C99',
  },
  buttonContainer:{
    marginVertical: width*.08
  },
  logo:{
    marginBottom: width*.1
  },
  textContainer:{
    marginBottom: width*.1
  },
  forgotPassword:{
    width: width*.9,
    alignSelf: 'center',
    alignItems: 'flex-end'
  },
  formGroup:{
    justifyContent: 'center'
  }
});
