const initialState = {
  data: {},
  errorMessage: '',
  isLoading: false,
  isError: false
}

const portfolio = (state=initialState, action) =>{
  switch (action.type){
    case 'SHOWPORTFOLIO_PENDING':{
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'SHOWPORTFOLIO_REJECTED':{
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.data
      };
    }
    case 'SHOWPORTFOLIO_FULFILLED':{
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

export default portfolio;