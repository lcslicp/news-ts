import React from 'react';
import styles from '../../css/feature/SearchInput.module.css';
import { queryProps } from '../../App';

const SearchInput: React.FC<queryProps> = ({
  setQuery,
  setSelectedTab,
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSelectedTab(6);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSelectedTab(6);
    }
  };
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type='search'
        className={styles.search}
        placeholder='Search News'
        onChange={handleChange}
        maxLength={500}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.btn} type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
