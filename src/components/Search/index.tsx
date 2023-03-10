type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { BsSearch } from 'react-icons/bs'
import { useState, KeyboardEvent } from 'react'
import classes from './Search.module.css';

const Search = ( {loadUser} : SearchProps ) => {
  const [userName, serUserName] = useState('');
  const handleKeyDown = (e: KeyboardEvent ) => {
    if (e.key === 'Enter') {
      loadUser(userName);
    }
  }
  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => serUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button>
          <BsSearch onClick={() => loadUser(userName)}/>
        </button>
      </div>
    </div>
  )
}

export default Search