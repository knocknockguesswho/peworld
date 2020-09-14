import React, { Component } from 'react';
import {connect} from 'react-redux';
import {LogoutAction} from '../redux/actions/auth'

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
  BriefProfile,
  DataDiri,
  Skill,
  WorkExperiences,
  Portfolio
} from '../components/molecules'

class Profile extends Component{
  constructor(){
    super();
    this.state = {
      dataDiri: [
        {
          placeholder: 'Nama Lengkap',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Job Title',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Domisili',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Tempat Kerja',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Deskripsi Singkat',
          value: '',
          type: 'none',
          secure: false,
          height: width*.3
        },
      ],
      workExperiences: [
        {
          placeholder: 'Posisi',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Nama perusahaan',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Bulan/Tahun',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Deskripsi Singkat',
          value: '',
          type: 'none',
          secure: false,
          height: width*.3
        },
      ],
      portfolio: [
        {
          placeholder: 'Nama aplikasi',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Deskripsi singkat',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Tempat kerja terkait',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Link publikasi',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Link repository',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Deskripsi Singkat',
          value: '',
          type: 'none',
          secure: false,
          height: width*.3
        },
      ]
    }
  }

  getDataDiriValue = (param, param2) => {
    this.setState((prevState) => ({
      dataDiri: prevState.dataDiri.map((form) =>
        form.placeholder === param
          ? Object.assign(form, {...form, value: param2})
          : form,
      ),
    }));
  };
  getWorkExperiencesValue = (param, param2) => {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.map((form) =>
        form.placeholder === param
          ? Object.assign(form, {...form, value: param2})
          : form,
      ),
    }));
  };
  getPortfolioValue = (param, param2) => {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.map((form) =>
        form.placeholder === param
          ? Object.assign(form, {...form, value: param2})
          : form,
      ),
    }));
  };

  handleLogout = () =>{
    this.props.LogoutAction()
    this.props.navigation.push('Home')
  }

  render(){
    return(
      <>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scrollViewLayout}>
              <BriefProfile 
                logout={this.handleLogout}
              />
              <DataDiri 
                formGroup={this.state.dataDiri}
                submit={this.getDataDiriValue}
              />
              <Skill />
              <WorkExperiences 
                formGroup={this.state.workExperiences}
                submit={this.getWorkExperiencesValue}
              />
              <Portfolio 
                formGroup={this.state.portfolio}
                submit={this.getPortfolioValue}
              />
            </View>
          </ScrollView>
        </View>
      </>
    )
  }
}

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  scrollViewLayout:{
    paddingTop: width*.1,
    paddingBottom: width*.1
  }
})


const mapStateToProps = state =>({
  auth: state.auth,
  profile: state.profile,
  skills: state.skills,
  portfolio: state.portfolio,
  workExperiences: state.workExperiences
})

const mapDispatchToProps = {LogoutAction}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);