import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

//BUG
//1. WHEN INPUT is ERROR, IT RETURNS VALUE OF ''; EXPECTED VALUE OF CURRENT VALUE
//2. WHEN DONESUBMITING WITH VALUE OF '',IT CANNOT GETTING BACK TO DEFAULT STATE

/*
placeholder? string
value? string
type? string
secure? boolean
submit? submit(function())
*/

const TextFieldMedium = ({
  placeholder,
  value,
  type,
  secure,
  submit,
  check,
  withArrow,
  outline,
  height
}) => {
  const [input, setInput] = useState({
    value: value,
    isError: false,
    isTyping: false,
    doneSubmitting: false,
  });

  const handleSubmitEditing = (val) => {
    setInput({...input, value: val});
    submit(placeholder, val);
  };

  const handleBlur = () => {
    setInput({
      ...input,
      isTyping: false,
      value: input.value,
      doneSubmitting: true,
    });
  };
  
  
  const placeHolderToLowerCase = placeholder.toLowerCase()
  return (
    <>
      <Text style={styles.formTitle}>{placeholder}</Text>
      <View style={styles.container(input.isError, outline, height)}>
        <Text
          style={styles.formLabel(
            input.isError,
            input.isTyping,
            input.doneSubmitting,
            input.value,
          )}>
          {(input.isTyping && input.doneSubmitting) || input.value !== ''
            ? placeholder
            : ''}
        </Text>
        <View style={styles.formContainer(input.isError, height)}>
          <TextInput
            placeholder={`Masukkan ${placeHolderToLowerCase}`}
            placeholderTextColor={'#22222250'}
            value={input.value}
            onFocus={() => setInput({...input, isTyping: true})}
            onBlur={() => handleBlur()}
            onChangeText={(val) => handleSubmitEditing(val)}
            // textContentType={type}
            secureTextEntry={secure}
            style={styles.formBar(input.isError)}
          />
          {input.value !== '' && check === true ? (
            <View style={styles.validation}>
              <Icon
                name={input.isError ? 'x' : 'check'}
                size={20}
                color={input.isError ? '#F01F0E' : '#2AA952'}
              />
            </View>
          ) : withArrow ? (
            <TouchableOpacity style={styles.withArrow}>
              <Icon name="chevron-right" size={15} color="#22222280" />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
      {input.isError ? (
        <Text style={styles.errorMessage}>Error Message</Text>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextFieldMedium;
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  formContainer: (isError, heightProp) => ({
    width: width * 0.85,
    height: heightProp || width * 0.12,
    backgroundColor: 'white',
    paddingLeft: width * 0.03,
    marginRight: width * 0.009,
    marginBottom: width * 0.003,
    flexDirection: 'row',
  }),
  formBar: (isError) => ({
    width: width * 0.8,
    color: isError ? '#F01F0E' : '#222222',
  }),
  container: (isError, outline, heightProp) => ({
    height: heightProp,
    width: width * 0.9,
    marginTop: width * 0.01,
    marginBottom: width * .05,
    borderRadius: width * 0.01,
    backgroundColor: 'white',
    borderColor: outline ? '#22222250' : 'white',
    borderWidth: outline ? width*.001 : 0,
    elevation: outline? 0 : 2,
    overflow: 'hidden',
  }),
  formLabel: (isError, isTyping, doneSubmitting, value) => ({
    zIndex: 1,
    color: isError ? '#F01F0E' : '#22222290',
    fontSize: 10,
    marginLeft: width * 0.04,
    marginBottom: -width * 0.02,
    marginTop:
      (isTyping && doneSubmitting) || value !== ''
        ? width * 0.01
        : -width * 0.01,
  }),
  validation: {
    marginTop: width * 0.005,
  },
  errorMessage: {
    fontSize: 10,
    marginTop: -width * 0.01,
    marginLeft: width * 0.04,
    color: '#F01F0E',
  },
  withArrow: {
    marginTop: width * 0.04,
  },
  formTitle:{
    textAlign: 'left',
    width: '90%',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: width*.04,
    color: '#46505C90'
  }
});
