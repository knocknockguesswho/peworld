import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {ShowAllUsers} from '../redux/actions/users';
import {ShowSkills} from '../redux/actions/skills';
import {ShowProfile} from '../redux/actions/profile';
import {ShowPortfolio} from '../redux/actions/portfolio';
import {ShowWorkExperiences} from '../redux/actions/workExperiences';
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


import {HomeBackground} from '../../assets/images'

const Dashboard = (props) =>{

  const [users, setUsers] = useState([])
  const [skills, setSkills] = useState([])
  const [profile, setProfile] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [workExperiences, setWorkExperiences] = useState([])

  const fetchUsers = async () =>{
    const token = props.auth.data.token;
    await props.ShowAllUsers(token)
    .then((res)=>{
      console.log(res)
      setUsers(res.value.data.data[0])
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const fetchSkills = async () =>{
    const token = props.auth.data.token;
    const user_id = props.auth.data.id;
    await props.ShowSkills(token, user_id)
    .then((res)=>{
      console.log(res)
      setSkills(res.value.data.data[0])
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const fetchProfile = async () =>{
    const token = props.auth.data.token;
    const user_id = props.auth.data.id;
    await props.ShowProfile(token, user_id)
    .then((res)=>{
      console.log(res)
      setProfile(res.value.data.data[0])
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  const fetchPortfolio = async () =>{
    const token = props.auth.data.token;
    const user_id = props.auth.data.id;
    await props.ShowPortfolio(token, user_id)
    .then((res)=>{
      console.log(res)
      setPortfolio(res.value.data.data[0])
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  const fetchWorkExperiences = async () =>{
    const token = props.auth.data.token;
    const user_id = props.auth.data.id;
    await props.ShowWorkExperiences(token, user_id)
    .then((res)=>{
      console.log(res)
      setWorkExperiences(res.value.data.data[0])
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    fetchUsers()
    fetchSkills()
    fetchProfile()
    fetchPortfolio()
    fetchWorkExperiences()
  },[])

  const handleGoToNotification = () =>{
    props.navigation.navigate('Notification')
  }

  const [data, setData] = useState([
      {
        name: 'Faris Ramadhan',
        avatar: HomeBackground,
        job: 'Full Stack Developer',
        skills: ['javascript', 'java', 'css']
      },
      {
        name: 'Faris Ramadhan',
        avatar: HomeBackground,
        job: 'Full Stack Developer',
        skills: ['javascript', 'java', 'css']
      },
      {
        name: 'Faris Ramadhan',
        avatar: HomeBackground,
        job: 'Full Stack Developer',
        skills: ['javascript', 'java', 'css']
      },
      {
        name: 'Faris Ramadhan',
        avatar: HomeBackground,
        job: 'Full Stack Developer',
        skills: ['javascript', 'java', 'css']
      },
      {
        name: 'Faris Ramadhan',
        avatar: HomeBackground,
        job: 'Full Stack Developer',
        skills: ['javascript', 'java', 'css']
      },
  ])


  return(
    <>
      <View>
        <View style={styles.header}>
          <DashboardHeader 
            notificationPress={handleGoToNotification}
          />
        </View>
        <DashboardBody 
          data={data}
        />
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

const mapDispatchToProps = {
  ShowAllUsers, 
  LogoutAction,
  ShowSkills,
  ShowPortfolio,
  ShowProfile,
  ShowWorkExperiences
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
