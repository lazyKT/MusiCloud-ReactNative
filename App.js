import React, { useState } from "react";
import Home from './src/screens/Home.js';

import MyContext from './src/context/MyContext';


const App = () => {

  const [media, setMedia] = useState({
    title: 'Hotel California',
    channel: 'Eagles vevo'
  });
  const value = { media, setMedia }

  return (
      <MyContext.Provider value={value}>
        <Home/>
      </MyContext.Provider>
    )
}


export default App;
