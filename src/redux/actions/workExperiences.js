import axios from 'axios';
import {API_URL} from '@env'

export const ShowWorkExperiences = (token, user_id) =>{
  return {
    type: 'SHOWWORKEXPERIENCES',
    payload: axios({
      method: 'GET',
      url: `http://54.236.49.226:3000/api/workExp/show/${user_id}`,
      headers: {
        'Authorization': token
      }
    }),
  };
};