import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo }) => {
  return (
    <div className='border p-4'>
      <a href={repo.html_url} className="text-danger" style={{ textDecoration: 'none' }}> {repo.name} </a>
    </div>
  );
};

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default Repo;
