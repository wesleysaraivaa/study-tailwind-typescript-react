import React from 'react';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    </div>
  );
};

export default App;
