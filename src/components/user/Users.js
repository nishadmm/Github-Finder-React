import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  if (loading === true) {
    return <Spinner />;
  } else {
    return (
      <div className='row row-cols-1 row-cols-md-3 row-cols-sm-2'>

        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

export default Users;
