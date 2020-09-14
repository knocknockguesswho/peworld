import { useLinkProps } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  SearchHeader
} from '../components/molecules'

const Search = (props) =>{

  const [searchValue, setSearchValue] = useState('')

  const [isModalVisible, setModalVisible] = useState(false);
  
  const handleSortButton = () => {
    setModalVisible(!isModalVisible);
  };

  const getData = (val) => {
    setSearchValue(val)
  };


  return(
    <>
      <View style={styles.container}> 
        <View style={styles.header}>
          <SearchHeader 
            sortButtonPress={handleSortButton}
            searchPlaceholder='Masukkan Pencarian'
            searchValue={searchValue}
            setValue={getData}
            navigation={props.navigation}
          />
        </View>
          <Modal isVisible={isModalVisible} >
            <View style={styles.modal}>
              <TouchableOpacity 
                onPress={handleSortButton}
                style={styles.modalButton}
              >
              <Text>Sortir Berdasarkan Nama</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={handleSortButton}
                style={styles.modalButton}
              >
              <Text>Sortir Berdasarkan Skill</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={handleSortButton}
                style={styles.modalButton}
              >
              <Text>Sortir Berdasarkan Lokasi</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={handleSortButton}
                style={styles.modalButton}
              >
              <Text>Sortir Berdasarkan Freelance</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={handleSortButton}
                style={styles.modalButton}
              >
              <Text>Sortir Berdasarkan Fulltime</Text>
              </TouchableOpacity>
            </View>
          </Modal>
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  header:{
    width: width*.95,
    alignSelf: 'center'
  },
  container:{
    width: width,
    height: height,
    paddingTop: width*.05
  },
  modal:{
    // width: width*.2,
    // height: width*.2,
    // backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  },
  modalButton: {
    width: width*.7,
    height: width*.1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})


export default Search;