import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {
  HeaderBackButton
} from '../components/molecules'

const SearchResult = (props) =>{

  let searchResult = props.route.params.search || ''
  const handleGoBack = () =>{
    props.navigation.goBack()
  }

  const [data, setData] = useState([
    1,2,3,4,5,6,7,8,9,10
  ])

  return(
    <>
      <View style={styles.container}>
        <HeaderBackButton 
          backgroundColor='#F6F7F8'
          submit={handleGoBack}
        />
        <View style={styles.dataContainer}>
          <Text style={styles.searchResultText}>{searchResult}</Text>
          <View style={styles.flatListContainer}>
            <FlatList 
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}) => (
                <View style={{marginRight: width*.02, marginBottom: width*.02}}>
                  <TouchableOpacity activeOpacity={.8} style={styles.card}>
                      <Text style={{color: 'red', fontSize: 12}}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              numColumns={2}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    width: width,
    height: height,
    paddingTop: width*.05,
    backgroundColor: '#F6F7F8'
  },
  dataContainer:{
    width: width*.95,
    alignSelf: 'center'
  },
  searchResultText:{
    color: '#1F2A36',
    fontSize: width*.04,
    fontFamily: 'OpenSans-SemiBold',
    marginVertical: width*.05
  },
  card:{
    width: width*.45,
    height: width*.65,
    backgroundColor: 'white'
  },
  flatListContainer:{
    alignItems: 'center',
    paddingBottom: width*.55
  }
})


export default SearchResult;