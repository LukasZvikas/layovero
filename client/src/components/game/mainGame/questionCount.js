import React from "react";
import { incrementLSQuestCount } from "./functions";
import { GameContext } from "./mainGameProvider";

const QuestionCount = () => {
  const checkQuestionCount = (LSQcount, stateQCount) => {
    return LSQcount ? incrementLSQuestCount() : stateQCount + 1;
  };

  const getCountFromLS = key => {
    return localStorage.getItem(key);
  };
  return (
    <GameContext.Consumer>
      {({ stateQCount }) => (
        <div className="game-info__count-wrap">
          <div className="game-info__correct-count">
            Question{" "}
            {checkQuestionCount(getCountFromLS("questCount"), stateQCount)} / 20{" "}
          </div>
          <div className="game-info__correct-count">
            Correct {getCountFromLS("resultCount")} / 20{" "}
          </div>
        </div>
      )}
    </GameContext.Consumer>
  );
};

export default QuestionCount;

// LSQcount={localStorage.getItem("resultCount")}
// action={localStorage.getItem("questCount")}
// stateQCount={1}
// LSResultCount={props.LSResultCount}