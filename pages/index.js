import dataSet from '../questions';
import "../style.css";

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
    const slides = document.getElementsByClassName("slide");

    for(var i=0; i < slides.length; i++) {
        if(slides[i].classList.contains('active')){
            slides[i].classList.remove('active');
            if(i+1 >= slides.length){
                slides[0].classList.add('active');
                break;
            }else {
                slides[i+1].classList.add('active');
                break;
            }
        }
    }
}

const renderNav = () => (
    <button
       className="btn"
       onClick={navClick}
    >
        Next
    </button>
);

export default () => (
  <div>
    <ul className='slide_wrap'>
      <li className='slide active'>
          {getQuestionDetail()}
      </li>
      <li className='slide'>
          {getQuestionDetail()}
      </li>
      <li className='slide'>
          {getQuestionDetail()}
      </li>
    </ul>
        {renderNav()}
        <a class="logo--github" href="https://github.com/lindsayjopson/catchup" target="_blank">
        lindsayjopson <img src="./static/github.png" /> 
        </a>
  </div>
);
