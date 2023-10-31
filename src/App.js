import React from 'react';
import './App.css';
import CurrentContent from './features/currentContent/CurrentContent';
import LeftBar from './features/leftBar/LeftBar';
import MainContentPreviews from './features/mainContentPreviews/MainContentPreviews';
import TopBar from './features/topBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar className="topBar" />
      <div classname="topBarSpacer" style={{ height: "4rem" }}>

      </div>

      <div className="contentWrapper">
        <LeftBar className="leftBar" />
        <main>
          <div className='current-article'>
            <CurrentContent />
          </div>
          <MainContentPreviews className="mainContent" />
        </main>

      </div>
    </div>
  );
}

export default App;
