import React from 'react';
import ZustandCounter from "./components/ZustandCounter";

const App: React.FC = () => {
  return (
    <div>
      <h1>Zustand</h1>
      <ZustandCounter/>
      <h1>Jotai</h1>
    </div>
  );
};

export default App;