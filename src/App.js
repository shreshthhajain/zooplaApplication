import React from 'react';
import './App.css';
import Content from './containers/Content/index';

function App() {
  return (
    <div>
      <div className="header">
      <img className="icon--logo" src="https://m.zoocdn.com/www/_b/static/images/logo-5ead14393a.svg" alt=""/>
      </div>
      <Content/>
    </div>
  );
}

export default App;
