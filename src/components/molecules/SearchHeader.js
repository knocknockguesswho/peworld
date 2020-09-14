import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  SearchBar,
  SortButton
} from '../atoms'

const SearchHeader = ({sortButtonPress, searchPlaceholder, searchValue, setValue, navigation}) =>{
  return(
    <> 
      <View style={styles.container}>
        <SearchBar 
          placeholder={searchPlaceholder}
          value={searchValue}
          submit={setValue}
          navigation={navigation}
        />
        <SortButton 
          onPress={sortButtonPress}
        />
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default SearchHeader;