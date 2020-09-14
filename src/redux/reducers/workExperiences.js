const initialState = {
  data: {},
  errorMessage: '',
  isLoading: false,
  isError: false
}

const workExperiences = (state=initialState, action) =>{
  switch (action.type){
    case 'SHOWWORKEXPERIENCES_PENDING':{
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'SHOWWORKEXPERIENCES_REJECTED':{
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.data
      };
    }
    case 'SHOWWORKEXPERIENCES_FULFILLED':{
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

export default workExperiences;