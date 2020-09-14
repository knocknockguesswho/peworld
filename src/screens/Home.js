/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

import {
  HomeBackground
} from '../../assets/images'

import {
  HomeTop,
  HomeBottom
} from '../components/molecules';


class Home extends Component{
  constructor(){
    super();
    this.state ={
      homeSubtitle: 'Temukan developer berbakat & terbaik di berbagai bidang keahlian'
    }
  }

  handleGoToLogin = () =>{
    this.props.navigation.push('Login')
  }

  componentDidMount(){
    if(this.props.auth.isLogin){
      this.props.navigation.push('MainApp')
    }
  }

  render(){
    return(
      <>
        <View style={styles.container}>
          <View style={styles.imageBackground}>
            <Image 
              source={HomeBackground}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover'
              }}
            />
            <View style={styles.overlay}>
              <View style={styles.topSec}>
                <HomeTop 
                  subTitle={this.state.homeSubtitle}
                />
              </View>
              <View style={styles.botSec}>
                <HomeBottom 
                  submit={()=>this.handleGoToLogin()}
                />
              </View>
            </View>
          </View>
        </View>
      </>
    )
  }
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
  },
  imageBackground:{
    width: width,
    height: height,
    backgroundColor: 'yellow',
    display: 'flex'
  },
  overlay:{
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#5E50A199',
    display: 'flex',
    paddingHorizontal: width*.04,
    paddingVertical: width*.08
  },
  topSec:{
    flex: 1
  },
  botSec:{
    flex: 1,
    paddingTop: width*.8,
    paddingBottom: width*.2
  }
})

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps
)(Home);