import axios from 'axios';

export const ShowProfile = (token, user_id) =>{
  return{
    type: 'SHOWPROFILE',
    payload: axios({
      method: 'GET',
      url: `http://54.236.49.226:3000/api/profile/show/${user_id}`,
      headers:{
        'Authorization': token
      }
    })
  }
}

export const InsertProfile = (token, data, user_id) =>{
  return{
    type: 'INSERTPROFILE',
    payload: axios({
      method: 'POST',
      url: `http://54.236.49.226:3000/api/profile/post/${user_id}`,
      data:{
        user_id: data.user_id,
        avatar: data.avatar,
        fullname: data.fullname,
        job_title: data.job_title,
        domicile: data.domicile,
        work_place: data.work_place,
        self_description: data.self_description
      },
      headers:{
        'Authorization': token
      }
    })
  }
}

