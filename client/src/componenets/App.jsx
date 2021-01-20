import axios from 'axios';
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    axios('/game_carousel_info')
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      Aye! Baby
    </div>
  );
}

export default App;