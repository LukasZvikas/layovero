import React from "react";
import Question from "./question";
import { Heading, GameButton } from "../customComps";

//QUESTION COMPONENT
////////////////////

export const isChosen = props => {
  if (props.choice === props.title || (props.isAnswered && props.isCorrect))
    return "chosen";
  return "";
};

export const correctChecker = (type, props) => {
  if (props.isCorrect && props.isAnswered && props.choice === props.title) {
    if (type === "class") return "correct";
    return "CORRECT!";
  } else if (
    !props.isCorrect &&
    props.isAnswered &&
    props.choice === props.title
  ) {
    if (type === "class") return "incorrect";
    return "INCORRECT!";
  } else if (
    props.isCorrect &&
    props.isAnswered &&
    props.choice !== props.title
  ) {
    if (type === "class") return "correct";
    return "CORRECT!";
  }

  return "";
};

//MAIN WRAPPER
//////////////

export const checkIfLast = (roundCounter, arr, action) => {
  const diff = 1;
  if (diff === 1) return action;
  return null;
};

export const isCorrect = (title, correctAnswer) => {
  if (title === correctAnswer) return true;
  return false;
};

export const buttonStateCheck = state => {
  if (state === "") return true;
  return false;
};

export const answerScoreHandler = ({
  isCorrect,
  correctAction,
  incorrectAction
}) => {
  return isCorrect ? correctAction() : incorrectAction();
};

// render a set of 4 questions everytime.
export const renderQuestions = ({
  questions,
  choice,
  questCount,
  answered,
  actions
}) => {
  const currentQuest = questions[questCount];
  const correctAnswer = currentQuest.correct_answer;
  const answersArr = currentQuest.answers;
  return answersArr.map(item => (
    <Question
      title={item.title}
      onClick={() => actions.checkIfAnswered(item.title)}
      image={item.image}
      choice={choice}
      isCorrect={isCorrect(item.title, correctAnswer)}
      isAnswered={answered}
    />
  ));
};

export const getQuestTitle = ({ questions, questCount }) => {
  const getCurrentQuests = questions[questCount];
  const primary = getCurrentQuests.primaryText;
  const special = getCurrentQuests.specialWord;
  return { primary, special };
};
//checks if localStorage's and state's questCount's match

export const checkIfCorrect = ({ choice, questions, questCount }) => {
  if (choice === questions[questCount].correct_answer) return true;
  return false;
};
