import React, { Component } from 'react';
import {connect} from 'react-redux';
import {LoginAction} from '../redux/actions/auth'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import{
  FormAuth
} from '../components/molecules'

class Login extends Component{
  constructor(){
    super();
    this.state = {
      formGroup: [
        {
          placeholder: 'Email',
          value: '',
          type: 'emailAddress',
          secure: false,
        },
        {
          placeholder: 'Password',
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

  handleGoToSignup = () =>{
    this.props.navigation.push('Signup')
  }

  handleLogin = async () => {
    const {formGroup} = this.state;
    const data = {
      email: formGroup[0].value,
      password: formGroup[1].value,
    };
    await this.props.LoginAction(data)
      .then((res) => {
        this.props.navigation.push('MainApp');
      })
      .catch((err) => {
        Alert.alert(err.response.data.data);
        console.log(err.response.data);
      });
  };

  render(){
    return(
      <>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.scrollViewLayout}>
              <FormAuth 
                formGroup={this.state.formGroup}
                title="Login"
                subTitle="This screen is for employee"
                link="Already have an account?"
                submit={this.getData}
                onPress={() => this.handleLogin()}
                type='login'
                forgotPress={()=>console.log(`I'm Forget`)}
                buttonTitle='Masuk'
              />
            <View style={styles.signupFirst}>
              <Text>Anda belum punya akun? </Text>
              <TouchableOpacity 
                onPress={this.handleGoToSignup}
              >
                <Text style={styles.signupFirstText}> Daftar disini</Text>
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
  scrollViewLayout:{
    paddingBottom: width*.2
  },
  signupFirst:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center'
  },
  signupFirstText:{
    color: '#FBB017',
  },
});

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {LoginAction}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
