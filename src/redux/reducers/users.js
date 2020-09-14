const initalState = {
  data: {},
  errorMessage: '',
  isLoading: false,
  isError: false
}

const users = (state=initalState, action) =>{
  switch (action.type){
    case 'SHOWALLUSERS_PENDING':{
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'SHOWALLUSERS_REJECTED':{
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.data
      };
    }
    case 'SHOWALLUSERS_FULFILLED':{
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload.data.data
      };
    }
    default:{
      return state;
    }
  }
}

export default users;