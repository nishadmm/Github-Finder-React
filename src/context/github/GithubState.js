import { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
  GETUSERS,
  SETLOADING,
  CLEAR,
  GETUSER,
  GETREPOS,
  SETALERT,
  REMOVEALERT,
} from '../Types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: false,
    alertmsg: null,
  };

  let githubClientId, githubClientSecret;

  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_FINDER_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_FINDER_CLIENT_SECRET;
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getUsers = async (searchTerm) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    if (res.data.items.length > 0) {
      dispatch({ type: GETUSERS, payload: res.data.items });
    } else {
      setAlert("No user Found")
    }
  };

  const getUser = async (userName) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${userName}`);

    dispatch({ type: GETUSER, payload: res.data });
  };

  const getRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GETREPOS, payload: res.data });
  };

  const setAlert = (msg) => {
    dispatch({ type: SETALERT, payload: msg });

    setTimeout(() => {
      removeAlert();
    }, 5000);
  };

  const removeAlert = () => {
    dispatch({ type: REMOVEALERT });
  };

  const clear = () => dispatch({ type: CLEAR });

  const setLoading = () => dispatch({ type: SETLOADING });

  const { users, user, repos, loading, alert, alertmsg } = state;

  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        repos,
        loading,
        alert,
        alertmsg,
        getUsers,
        setAlert,
        removeAlert,
        clear,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
