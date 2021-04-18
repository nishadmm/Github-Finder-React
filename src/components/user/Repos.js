import { useContext } from 'react';
import Repo from './Repo';
import GithubContext from '../../context/github/GithubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return (
    <div>
      {repos.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default Repos;
