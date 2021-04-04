const quiz = [
  {
    question: '炎症反応が起きた結果、血管にはどのような反応が起きるか',
    answers: [ '血管の収縮', '血管の透過性亢進', '血管の拡張', '血管の狭小化'],
    correct: '血管の透過性亢進'
  },{
    question: '炎症反応による循環血液量の変化について、正しい選択肢はどれか。',
    answers: [ '炎症反応により血管透過性が亢進し、サードスペースへ血漿成分が移行する', '炎症が軽快すると、リフィリングにより血漿成分が血管外に漏出する', '炎症反応により血管透過性が亢進し、血漿成分が増加する', '炎症反応によりリフィリングが発生する'],
    correct: '炎症反応により血管透過性が亢進し、サードスペースへ血漿成分が移行する'
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
