import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import Repos from './Repos';
import GithubContext from '../../context/github/GithubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, getRepos, user, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.username);
    getRepos(match.params.username);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_utl,
    followers,
    following,
    public_repos,
    public_gists,
    hierable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div className='my-3'>
      <Link to='/' className='btn btn-light border me-4 '>
        Back to Search
      </Link>
      Heirable:{' '}
      {hierable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-times-circle text-danger'></i>
      )}
      <div className=' row mt-3 border p-4 '>
        <div className='col-md text-center'>
          <img
            src={avatar_url}
            alt='avatar'
            className=''
            style={{ width: '150px', borderRadius: '50%' }}
          />
          <h4 >{name}</h4>
          <p>Location: {location}</p>
        </div>
        <div className='col-md'>
          {bio && (
            <>
              <h3>
                Bio : <i className='lead'>{bio}</i>
              </h3>
            </>
          )}
          <a href={html_utl} className='btn btn-dark my-2'>
            Visit Profile
          </a>
          <ul className="list-unstyled">
            <li>
              {login && (
                <>
                  <strong>Username : </strong> {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company : </strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Blog : </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='border p-3 my-2 d-flex flex-wrap justify-content-center'>
        <span className='badge p-2 bg-primary me-1 mb-1'>Followers: {followers}</span>
        <span className='badge p-2 bg-danger me-1 mb-1'>Following: {following}</span>
        <span className='badge p-2 bg-success me-1 mb-1'>Public Repos: {public_repos}</span>
        <span className='badge p-2 bg-dark mb-1'>Public Gists: {public_gists}</span>
      </div>
      <Repos />
    </div>
  );
};

export default User;
