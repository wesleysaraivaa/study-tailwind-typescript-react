import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-700">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
