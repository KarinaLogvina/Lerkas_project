import React from 'react';
import PhotoGalery from './components/Galety';

function App() {
  return (
    <div className="App ">
      <div className="ml-10 mt-10 w-full flex flex-center max-w-md rounded" >
        <h1 className="font-display text-5xl">Valeron Art Zone</h1>
      </div>
      <div className='p-10'>
        <PhotoGalery />
      </div>
    </div>
  );
}

export default App;
