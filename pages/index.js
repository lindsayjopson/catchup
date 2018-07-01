import dataSet from '../questions';
import "../style.css"

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const getQuestionDetail = () => {
  const randGroup = dataSet.questions[
    getRandomInt(dataSet.questions.length)
  ];

  const randGroupSet = Object.values(randGroup)[0];
  const randQuestion = randGroupSet[
    getRandomInt(randGroupSet.length)
  ];

  return renderQuestion(randGroup, randQuestion);
}

const renderQuestion = (questionHeading, questionText) => (
  <div className='question_wrap'>
    <div className='padding question-text'>
      {questionText}
    </div>
    <span className='padding question-heading'>
      {Object.keys(questionHeading).toString().replace(/([a-z](?=[A-Z]))/g, '$1 ')}
    </span>
  </div>
);

function navClick() {
  console.log('test');
}

const renderNav = () => (
  <ul
    className='slide_indicator_wrap'
  >
    <li
      className='slide_indicator active'
      onClick={navClick()}
    >
    </li>
    <li className='slide_indicator'>
    </li>
    <li className='slide_indicator'>
    </li>
  </ul>
)

export default () => {
  return (
    <div>
      <ul className='slide_wrap'>
        <li className='slide active'>
            {getQuestionDetail()}
        </li>
        <li className='slide'>
            {getQuestionDetail()}
        </li>
      </ul>
      {renderNav()}
    </div>
  );
}
