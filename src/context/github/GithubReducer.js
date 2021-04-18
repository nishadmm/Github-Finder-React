import {
  GETUSERS,
  SETLOADING,
  CLEAR,
  GETUSER,
  GETREPOS,
  SETALERT,
  REMOVEALERT,
} from '../Types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case GETUSERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GETUSER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case SETLOADING:
      return {
        ...state,
        loading: true,
      };
    case SETALERT:
      return {
        ...state,
        alert: true,
        alertmsg: action.payload,
        loading: false
      };
    case REMOVEALERT:
      return {
        ...state,
        alert: false,
        alertmsg: null
      };
    case CLEAR:
      return {
        ...state,
        users: [],
        user: {},
        loading: false,
      };
    case GETREPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default GithubReducer;
