import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {ShowAllUsers} from '../redux/actions/users';
import {LogoutAction} from '../redux/actions/auth';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {BellIcon} from '../../assets/icon';
import {
  DashboardHeader,
  DashboardBody
} from '../components/molecules'


const Dashboard = (props) =>{

  // const [users, setUsers] = useState([])

  // const fetchUsers = async () =>{
  //   const token = props.auth.data.token;
  //   await props.ShowAllUsers(token)
  //   .then((res)=>{
  //     console.log(res)
  //     setUsers(res.value.data.data[0])
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  //   console.log(props.auth.data.token)
  // }

  // const handleLogout = () =>{
  //   props.LogoutAction()
  //   props.navigation.push('Login')
  // }

  // useEffect(()=>{
  //   fetchUsers()
  // },[])

  const [data, setData] = useState([
    1,2,3,4,5,6,7,8,9,10
  ])

  const handleGoToNotification = () =>{
    props.navigation.navigate('Notification')
  }


  return(
    <>
      <View>
        <View style={styles.header}>
          <DashboardHeader 
            notificationPress={handleGoToNotification}
          />
        </View>
        <DashboardBody />
      </View>
    </>
  )
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  header:{
    width: width,
    height: width*.5,
    backgroundColor: '#5E50A1',
    borderBottomRightRadius: width*.05,
  },
});

const mapStateToProps = state =>({
  users: state.users,
  auth: state.auth
});

const mapDispatchToProps = {ShowAllUsers, LogoutAction}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
