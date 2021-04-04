const quiz = [
  {
    question: '侵襲を受けることで、反応する内分泌のシステムについて、適切な選択肢はどれか。',
    answers: [ '視床下部→下垂体→副腎髄質', '下垂体→視床下部→副腎皮質', '下垂体→副腎皮質→副腎髄質', '視床下部→下垂体→副腎皮質'],
    correct: '視床下部→下垂体→副腎皮質'
  },{
    question: '侵襲を受けることで、反応する内分泌のシステムについて、適切な選択肢はどれか。',
    answers: [ '副腎髄質→副交感神経', '副腎皮質→副腎髄質', '副腎髄質→交感神経', '交感神経→副腎髄質'],
    correct: '交感神経→副腎髄質'
  },{
    question: '次の文章の( )に当てはまるもので適切なのはどれか。＿＿＿＿＿＿「侵襲を受けると、コルチゾールやカテコラミンが肝臓や筋肉に作用し、（①）が起こる。またカテコラミンはインスリン（②）を高める。その結果、血糖が上昇する。」',
    answers: [ '①シバリング　②感受性', '①糖新生　②抵抗性', '①耐糖能　②抵抗性', '①糖新生　②感受性'],
    correct: '①糖新生　②抵抗性'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
