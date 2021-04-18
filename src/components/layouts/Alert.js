import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

const Alert = () => {
  const githubContext = useContext(GithubContext);
  const { alertmsg, removeAlert } = githubContext

  return (
    <div
      className='alert alert-warning alert-dismissible fade show'
      role='alert'
    >
      <i className='fas fa-info-circle'></i>  {alertmsg}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
        onClick={removeAlert}
      ></button>
    </div>
  );
};

export default Alert;
