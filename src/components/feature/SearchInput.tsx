import React, { useRef } from 'react';
import styles from '../../css/common/Header.module.css';
import { queryProps } from '../../App';

const SearchInput: React.FC<queryProps> = ({
  setQuery,
  selectedTab,
  setSelectedTab,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setSelectedTab(6);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputRef.current) {
        inputRef.current.value = '';
      }
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
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.btn} type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
