import React from 'react';


const MyContext = React.createContext({
  media: {
    title: 'Hotel California',
    channel: 'Eagles vevo'
  },
  setMedia: () => {}
});

export default MyContext;
