import axios from 'axios';
import {API_URL} from '@env'

export const ShowSkills = (token, user_id) =>{
  return {
    type: 'SHOWSKILLS',
    payload: axios({
      method: 'GET',
      url: `http://54.236.49.226:3000/api/skills/show/${user_id}`,
      headers: {
        'Authorization': token
      }
    }),
  };
};