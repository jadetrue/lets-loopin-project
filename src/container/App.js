import React, { useState } from 'react';
import FeelingCard from '../components/FeelingCard';

function App() {
  const [mood, setMood] = useState(undefined);

  return (
    <div className={`card ${mood}`}>
      <FeelingCard mood={mood} />

      {/* The button block would likely be another component */}
      <div className="btn">
        <button onClick={() => setMood("happy")} className="btn--happy btn--mood">Happy</button>
        <button onClick={() => setMood("okay")} className="btn--okay btn--mood">Okay</button>
        <button onClick={() => setMood("sad")} className="btn--sad btn--mood">Sad</button>
      </div>
    </div>
  )
}

export default App;
