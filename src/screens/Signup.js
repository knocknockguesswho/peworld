import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import{
  FormAuth
} from '../components/molecules';

class Signup extends Component{
  constructor(){
    super();
    this.state = {
      formGroup: [
        {
          placeholder: 'Nama',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Email',
          value: '',
          type: 'emailAddress',
          secure: false,
        },
        {
          placeholder: 'No handphone',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Kata sandi',
          value: '',
          type: 'password',
          secure: true,
        },
        {
          placeholder: 'Konfirmasi kata sandi',
          value: '',
          type: 'password',
          secure: true,
        },
      ]
    }
  }

  getData = (param, param2) => {
    this.setState((prevState) => ({
      formGroup: prevState.formGroup.map((form) =>
        form.placeholder === param
          ? Object.assign(form, {...form, value: param2})
          : form,
      ),
    }));
  };

  handleSignup = async () => {
    // const {dispatch, navigation} = this.props;
    // const {formGroup} = this.state;
    // const data = {
    //   name: formGroup[0].value,
    //   email: formGroup[1].value,
    //   password: formGroup[2].value,
    // };
    // await dispatch(Register(data))
    //   .then((res) => {
    //     Alert.alert(
    //       'Register Success, Check your email for get activation code',
    //     );
    //     navigation.replace('Verification');
    //   })
    //   .catch((err) => {
    //     Alert.alert(err.response.data.data);
    //     console.log(err.response.data);
    //   });
    console.log('Signup')
  };

  handleGoToLogin = () =>{
    this.props.navigation.push('Login')
  }

  render(){
    
    return(
      <>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.scrollViewLayout}>
              <FormAuth 
                formGroup={this.state.formGroup}
                title="Signup"
                subTitle="This screen is for employee"
                link="Already have an account?"
                submit={this.getData}
                onPress={() => this.handleLogin()}
                forgotPress={()=>console.log(`I'm Forget`)}
                buttonTitle='Daftar'
              />
              <View style={styles.loginInstead}>
                <Text>Anda sudah punya akun? </Text>
                <TouchableOpacity 
                  onPress={this.handleGoToLogin}
                >
                  <Text style={styles.loginInsteadText}> Masuk disini</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    )
  }
}

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
  },
  loginInstead:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center'
  },
  loginInsteadText:{
    color: '#FBB017',
  },
  scrollViewLayout:{
    paddingBottom: width*.2
  }
})

export default Signup;
