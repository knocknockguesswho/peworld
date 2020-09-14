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
import IconFeather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Fontisto';

//BUG WHEN INPUT ERROR, IT RETURNS VALUE OF ''; EXPECTED VALUE OF CURRENT VALUE

export default SearchBar = ({placeholder, value, submit, type, navigation}) => {
  const [input, setInput] = useState({
    value: value,
    isError: false,
    isTyping: false,
    doneSubmitting: false,
  });

  const handleSearch = (val) => {
    setInput({...input, value: val});
    submit(val);
  };
  
  const handleSubmitEditing = () =>{
    if(input.value!==''||input.value!==null||input.value!==undefined){
      navigation.push('SearchResult', {search: input.value})
    } console.log('Cannot search')
  }

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.formContainer(input.isError)}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#22222250'}
            value={input.value}
            onFocus={() => setInput({...input, isTyping: true})}
            onBlur={(value) =>
              setInput({
                ...input,
                isTyping: true,
                value: value,
                doneSubmitting: true,
              })
            }
            onChangeText={(value) => handleSearch(value)}
            // textContentType={type}
            style={styles.formBar(input.isError)}
            onSubmitEditing={handleSubmitEditing}
            keyboardType="web-search"
          />
          <View style={styles.searchIcon}>
            <Icon name="zoom" size={15} color="#22222280" />
          </View>
        </View>
      </View>
    </>
  );
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  formContainer: (isError) => ({
    width: width * 0.8,
    height: width * 0.09,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row-reverse',
    elevation: 0.5,
    alignItems: 'center',
  }),
  formBar: (isError) => ({
    width: width * 0.7,
    color: isError ? '#F01F0E' : '#222222',
  }),
  formLabel: (isError, isTyping, doneSubmitting, value) => ({
    // zIndex: 1,
    color: isError ? '#F01F0E' : '#22222290',
    fontSize: 10,
    marginBottom: -width * 0.02,
    marginTop:
      (isTyping && doneSubmitting) || value !== ''
        ? width * 0.01
        : -width * 0.01,
  }),
  searchIcon: {
    marginRight: width * 0.025,
  },
});
