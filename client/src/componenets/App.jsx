import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [currentGameId, setGameId] = useState(1);

  useEffect(() => {
    axios.get(`/game_carousel_info?id=${currentGameId}`)
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