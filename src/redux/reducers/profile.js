const initialState = {
  data: {},
  errorMessage: '',
  isLoading: false,
  isError: false
}

const profile = (state=initialState, action) =>{
  switch (action.type){
    case 'SHOWPROFILE_PENDING':{
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'SHOWPROFILE_REJECTED':{
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.data
      };
    }
    case 'SHOWPROFILE_FULFILLED':{
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data[0]
      };
    }
    case 'INSERTPROFILE_PENDING':{
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'INSERTPROFILE_REJECTED':{
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.data
      };
    }
    case 'INSERTPROFILE_FULFILLED':{
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    default:{
      return state;
    }
  }
}

export default profile;