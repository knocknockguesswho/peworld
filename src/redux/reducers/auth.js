const initialState = {
  data: {},
  errorMessage: '',
  isLoading: false,
  isLogin: false,
  isError: false
};

const auth = (state=initialState, action) =>{
  switch (action.type){
    case 'LOGIN_PENDING':{
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLogin: false
      };
    }
    case 'LOGIN_REJECTED':{
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLogin: false
      };
    }
    case 'LOGIN_FULFILLED':{
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: true,
        data: action.payload.data.data[0]
      };
    }
    case 'LOGOUT_FULFILLED':{
      return {
        ...state,
        data:{}
      };
    }
    default:{
      return state;
    }
  }
}

export default auth;