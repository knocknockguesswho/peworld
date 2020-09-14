const initialState = {
  data: {},
  errorMessage: '',
  isLoading: false,
  isError: false
}

const skills = (state=initialState, action) =>{
  switch (action.type){
    case 'SHOWSKILLS_PENDING':{
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'SHOWSKILLS_REJECTED':{
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.data
      };
    }
    case 'SHOWSKILLS_FULFILLED':{
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data[0]
      };
    }
    default:{
      return state;
    }
  }
}

export default skills;