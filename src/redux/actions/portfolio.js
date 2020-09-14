import axios from 'axios';
import {API_URL} from '@env'

export const ShowPortfolio = (token, user_id) =>{
  return {
    type: 'SHOWPORTFOLIO',
    payload: axios({
      method: 'GET',
      url: `http://54.236.49.226:3000/api/portfolio/show/${user_id}`,
      headers: {
        'Authorization': token
      }
    }),
  };
};