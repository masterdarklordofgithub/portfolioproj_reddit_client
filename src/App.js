import React from 'react';
import styles from './App.module.css';
import CurrentContent from './features/currentContent/CurrentContent';
import LeftBar from './features/leftBar/LeftBar';
import MainContentPreviews from './features/mainContentPreviews/MainContentPreviews';
import TopBar from './features/topBar/TopBar';

function App() {
  return (
    <div className={styles.App}>
      <TopBar className={styles.TopBar} />
      <div className={styles.topBarSpacer} >
      </div>

      <div className={styles.contentWrapper}>
        <LeftBar className={styles.leftBar} />
        <main>
          <div>
            <CurrentContent />
          </div>
          <MainContentPreviews className={styles.mainContent} />
        </main>

      </div>
    </div>
  );
}

export default App;
