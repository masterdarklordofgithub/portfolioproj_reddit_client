import React from 'react';
import styles from './TopBar.module.css';

function TopBar() {
  return (
    <div className={styles['top-bar']}>
      <div className={styles.NavWrap}>


        <div className={styles['logo-container']}>

          <i href="#" alt="Logo" className={styles.logo} />

        </div>
        <div className={styles['search-container']}>
          <form className={styles['search-form']}>
            <input type="text" placeholder="Search" className={styles.search} />
            <button type="submit" className={styles['search-button']}>
              <span className={styles['search-icon']}></span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default TopBar;
