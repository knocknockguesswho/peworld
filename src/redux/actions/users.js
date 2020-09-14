import axios from 'axios';

export const ShowAllUsers = (token) =>{
  return{
    type: 'SHOWALLUSERS',
    payload: axios({
      method: 'GET',
      url: `http://54.236.49.226:3000/api/user/showUsers`,
      headers:{
        'Authorization': token
      }
    })
  }
}

// export const ShowSkills = (user_id, token) =>{
//   return{
//     type: 'SHOWALLSKILLS',
//     payload: axios({
//       method: 'GET',
//       url: `http://54.236.49.226:3000/api/skills/show/${user_id}`,
//       headers:{
//         'Authorization': token
//       }
//     })
//   }
// }