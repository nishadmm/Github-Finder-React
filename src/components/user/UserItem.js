import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className='col-md my-2 border d-flex align-items-center flex-column py-4'>
      <img
        src={avatar_url}
        alt='avatar'
        style={{ width: '59px', borderRadius: '50%' }}
      />
      <h5 className="text-center" >{login}</h5>
      <div>
        <Link to={`user/${login}`} className='btn btn-dark my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
