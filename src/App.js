//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);

  // let [minCount, setMinCount] = useState(15);
  let [secCount, setSecCount] = useState(59);

// attempted to create a working countdown.
//countdown didn't stop when it reached 0 :(

  // useState(() => {
  //   const countdown = setInterval(() => {
  //     setSecCount(secCount => secCount - 1);
  //   }, 1000);
  //       return () => clearInterval(countdown);
  // }, [secCount]);




  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{secCount}</div>
          <div className="away">
            <h2 className="away__name">Packers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown +</button>
          <button onClick={() => setHomeScore(homeScore - 7)} className="homeButtons__touchdown">Home Touchdown -</button>
          <button onClick={() => { setHomeScore(homeScore + 3)}} className="homeButtons__fieldGoal">Home Field Goal +</button>
          <button onClick={() => { setHomeScore(homeScore - 3)}} className="homeButtons__fieldGoal">Home Field Goal -</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => { setAwayScore(awayScore + 7)}} className="awayButtons__touchdown">Away Touchdown +</button>
          <button onClick={() => { setAwayScore(awayScore - 7)}} className="awayButtons__touchdown">Away Touchdown -</button>
          <button onClick={() => { setAwayScore(awayScore + 3)} } className="awayButtons__fieldGoal">Away Field Goal +</button>
          <button onClick={() => { setAwayScore(awayScore - 3)} } className="awayButtons__fieldGoal">Away Field Goal -</button>
        </div>
      </section>
    </div>
  );
}

export default App;
