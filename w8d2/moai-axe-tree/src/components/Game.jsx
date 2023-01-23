import { useState } from "react";
import { pickOppositeChoice, pickRandomChoice, pickWinner } from "../helpers/gameHelpers";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";

export default function Game(props) {
  const [isCheating, setIsCheating] = useState(true);
  const [winner, setWinner] = useState(null);

  const toggleCheat = () => setIsCheating(!isCheating);

  const selectChoice = (choice) => {
    let computer = null;
    if (isCheating) {
      computer = pickOppositeChoice(choice);
    } else {
      computer = pickRandomChoice(Math.random() * 9000);
    }

    const newWinner = pickWinner(computer, choice);

    setTimeout(() => {
      setWinner(newWinner);
    }, 1000);
  };

  return (
    <div>
      <main className="game">
        <Computer isCheating={isCheating} toggleCheat={toggleCheat} />
        <Player setPlayerChoice={selectChoice} />
      </main>
      <Result winner={winner} />
    </div>
  );
}
