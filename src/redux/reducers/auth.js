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
    case 'REGISTER_PENDING':{
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'REGISTER_REJECTED':{
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.data
      };
    }
    case 'REGISTER_FULFILLED':{
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data[0]
      };
    }
    case 'LOGOUT':{
      return {
        ...state,
        isLogin: false,
        data:{}
      };
    }
    default:{
      return state;
    }
  }
}

export default auth;