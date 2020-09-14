import axios from 'axios';
import {API_URL} from '@env'

export const LoginAction = (data) =>{
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: `http://54.236.49.226:3000/api/auth/login`,
      data: {
        email: data.email,
        password: data.password,
      },
    }),
  };
};

export const LogoutAction = () =>{
  return {
    type: 'LOGOUT',
  };
};

export const RegisterAction = (data) => {
  return {
    type: 'REGISTER',
    payload: axios({
      method: 'POST',
      url: `http://54.236.49.226:3000/api/auth/register`,
      data: {
        email: data.email,
        fullname: data.name,
        phone: data.phone,
        password: data.password,
      },
    }),
  };
};