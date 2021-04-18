import { useContext, useState } from 'react';
import Alert from '../layouts/Alert';
import GithubContext from '../../context/github/GithubContext';

const Search = () => {
  const [text, setText] = useState('');

  const githubContext = useContext(GithubContext);
  const { getUsers, users, clear, alert, setAlert } = githubContext;

  const onSubmit = (e) => {
    e.preventDefault();

    let searchValue = text.trim();

    if (searchValue === '') setAlert('Please Enter Something...');
    else getUsers(text);

    setText('');
  };

  return (
    <form className='mt-3' onSubmit={onSubmit}>
      {alert && <Alert />}
      <input
        type='text'
        name='search'
        className='form-control'
        autoComplete='off'
        placeholder='Enter Username...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className='d-grid gap-2 my-4'>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark'
        />
        {users.length > 0 && (
          <button className='btn btn-light border btn-block' onClick={clear}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;
